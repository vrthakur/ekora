import { Page, expect } from "@playwright/test";
import HomePage from "./HomePage";
import logger from "../utils/LoggerUtil";

export default class LoginPage {

    //constructor
    constructor(private page: Page) {}

    //Object Repository
    private readonly userNametxt='#Login1_UserName';
    private readonly passwordtxt='#Login1_Password';
    private readonly loginbtn='Login';
    
//Action   

async quickLogin() {
    await this.navigateToLoginPage();
    await this.fillUsername(process.env.userId!);
    await this.fillPassword(process.env.password!);
    return await this.clickLoginButton();
  }

  async navigateToLoginPage() {
    await this.page.goto(process.env.baseUrl!);
    await expect(this.page).toHaveTitle('EKORA® - Integrated Patient Care');
    await expect(this.page).toHaveURL('https://ekorawebapplication.azurewebsites.net/Account/Login.aspx?ReturnUrl=%2f');
  }

  async fillUsername(username: string) {
    await this.page.fill(this.userNametxt,username);
    logger.info("Filled username : "+username);
  }
   
  async fillPassword(password: string) {
    await this.page.fill(this.passwordtxt,password);
    logger.info("Filled password");
  }

  async clickLoginButton() {
    await this.page
      .getByRole('button', { name: this.loginbtn })
      .click({force: true})
      .catch((error) => {     
        logger.error("Error clicking login button",error);
        throw error; // rethrow the error if needed
      })
      .then(() => logger.info("Clicked login button"));

    const homePage = new HomePage(this.page);
    return homePage;
  }
}
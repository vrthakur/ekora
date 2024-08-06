import { Page, expect } from "@playwright/test";
import logger from "../utils/LoggerUtil";

export default class DevicePage {

    //constructor
    constructor(private page: Page) {}

    //Object Repository
    private readonly plusIcon="#plusmenui";
   
    //Action
    async  getDeviceSummary(userName : string) {
        await this.page.getByRole('cell', { name: userName }).click().catch((error) => {     
            logger.error("Error clicking user cell at table button",error);
            throw error; // rethrow the error if needed
          })
        logger.info("Clicked on the device user cell having name "+userName);
    }
    async clickPlusIcon() {
        await this.page.click(this.plusIcon).catch((error) => {     
            logger.error("Error clicking login button",error);
            throw error; // rethrow the error if needed
          });
        logger.info("Clicked on the plus icon");
    }

}
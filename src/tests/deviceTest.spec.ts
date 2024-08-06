import { test, expect} from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import logger from "../utils/LoggerUtil";
import HomePage from "../pages/HomePage";
import DevicePages from "../pages/DevicePages";
import {DeviceList} from "../testdata/devices.json";

let homepage: HomePage;
let devicePages: DevicePages;

test('Get device link at home page',async ({page})=>{      
    const loginPage = new LoginPage(page);
    homepage= await loginPage.quickLogin();
    logger.info("Logged in successfully");
    await homepage.getDeviceLink();
    devicePages=await homepage.clickDeviceLink();
    logger.info("User clicked on Device link");
    await expect(page).toHaveURL('https://ekorawebapplication.azurewebsites.net/DevicePages/DeviceHome.aspx');
    await devicePages.getDeviceSummary(DeviceList[0].Forename);
    await devicePages.clickPlusIcon();
} )


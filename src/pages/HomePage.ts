import { Page, expect } from "@playwright/test";
import logger from "../utils/LoggerUtil";
import DevicePages from "../pages/DevicePages";

export default class HomePage {

    //constructor
    constructor(private page: Page) {}

    //Object Repository
    private readonly deviceLink='Devices';

    //Action
    async  getDeviceLink() {
        await this.page.getByRole('link', { name: this.deviceLink }).isVisible();
        logger.info("Device link is visible at home page");
    }
    async clickDeviceLink() {
        await this.page.getByRole('link', { name: this.deviceLink })
        .click()
        .catch((error) => {     
            logger.error("Error clicking on device button",error);
            throw error; // rethrow the error if needed
          })
          .then(() => logger.info("Clicked on Device link at home page"));
    ;
         const devicePages = new DevicePages(this.page);
        return devicePages;
    }
}
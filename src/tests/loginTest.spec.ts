import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import logger from "../utils/LoggerUtil";

test('Login Page',async ({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.quickLogin("testuser","Testing123");
    logger.info("Logged in successfully");
} )


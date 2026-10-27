import { test, expect } from '@playwright/test';

test('Admin Login Test', async ({ page }) => {

    await page.goto('https://praapti.in/');
    await page.getByRole('button', { name: 'Log in' }).click();

    await page.locator('#username').fill('ncmadmin01');
    await page.locator('#password').fill('Admin@123');

    // CAPTCHA must be solved manually in a live environment
    console.log('Please solve CAPTCHA manually');

    await page.pause();

    await page.locator('#Login').click();
});
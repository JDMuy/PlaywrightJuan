const { test, expect } = require('@playwright/test');
const { PlaywrightDevPage } = require('../POM/SauceDemoPOM');

test('Demo Test', async ({ page }) => {
    const playwrightDev = new PlaywrightDevPage(page);

    await playwrightDev.goto();
    await playwrightDev.login();
    await playwrightDev.addItemsToCart();
    await playwrightDev.checkout();
});

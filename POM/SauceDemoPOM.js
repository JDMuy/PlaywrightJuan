const { expect } = require('@playwright/test');
const { type } = require('os');

exports.PlaywrightDevPage = class PlaywrightDevPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.loginButton = page.locator('input[name="login-button"]')
        this.addBagToCart = page.locator('id=add-to-cart-sauce-labs-backpack')
        this.addBikeToCart = page.locator('id=add-to-cart-sauce-labs-bike-light')
        this.cartButton = page.locator('.shopping_cart_link')
        this.checkoutButton = page.locator('id=checkout')
        this.checkoutFirstName = page.getByPlaceholder('First Name')
        this.checkoutLastName = page.getByPlaceholder('Last Name')
        this.checkoutZipCode = page.getByPlaceholder('Zip/Postal Code')
        this.continueButton = page.locator('id=continue')
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com')
    }

    async login() {
        await this.username.fill('standard_user');
        await this.password.fill('secret_sauce');
        await this.loginButton.click();
    }

    async addItemsToCart() {
        await this.addBagToCart.click();
        await this.addBikeToCart.click();
    }

    async checkout() {
        await this.cartButton.click();
        await this.checkoutButton.click();
        await this.checkoutFirstName.fill('John');
        await this.checkoutLastName.fill('Doe');
        await this.checkoutZipCode.fill('12345');
        await this.continueButton.click();
    }
};
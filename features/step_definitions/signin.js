const {Given, Then, When, And} = require('cucumber');
const assert = require('assert');
let LoginPage = require('../../pageobjects/login_page.js');
let loginPage = new LoginPage();
let ProductPage = require('../../pageobjects/product_page');
let product_page = new ProductPage();

Given('I am in landing page', async function () {
    await browser.url(browser.options.baseUrl);
});

When('I enter {string} as my username', async function(username) {
    this.username = await loginPage.username
    await this.username.setValue(username)
})

When('I enter {string} as my password', async function(password) {
    this.password = await loginPage.password
    await this.password.setValue('secret_sauce');
})

When('I click submit', async function () {
    let submit = await loginPage.submitBtn
    submit.click()
})

Then('I am logged in', async function() {
    let products = await $('.product_label')
    products = await products.getText()
    assert.equal("Products", products)
})

When('I sort by {string}', async function(visibleText) {
    product_page.sortProducts(visibleText)
})

When('I pause for {int} milliseconds', async function(milliseconds) {
    await new Promise(resolve => setTimeout(resolve, milliseconds));
})
const {Given, Then, When} = require('cucumber');
const assert = require('assert');
let ProductPage = require('../../pageobjects/product_page');
const product_page = new ProductPage();
let CartPage = require('../../pageobjects/cart_page');
const cart_page = new CartPage();

When('I add {string} to cart', async function(itemName) {
    await product_page.addItem(itemName)
})

When('I navigate to shopping cart', async function() {
    await product_page.goToCart()
})

Then('I see {string} in the cart', async function(itemName) {
    expected = await cart_page.getCartItemName(itemName)
    assert.equal(itemName, expected)
})
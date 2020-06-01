const {Given, Then, When} = require('cucumber');
const assert = require('assert');
let CartPage = require('../../pageobjects/cart_page');
const cart_page = new CartPage();

When('I continue shopping', async function() {
    await cart_page.continueShopping();
})

When('I remove {string} from cart', async function(itemName) {
    await cart_page.removeItemFromCart(itemName);
})

When('I navigate to checkout', async function() {
    await cart_page.navigateToCheckout()
})
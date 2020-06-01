const {Given, Then, When, And} = require('cucumber');
const assert = require('assert');
let CheckoutPage = require('../../pageobjects/checkout_page');
const checkout_page = new CheckoutPage()

When('I enter my personal information', async function() {
    const fname = await checkout_page.fname
    await fname.setValue('Syed')
    const lname = await checkout_page.lname
    await lname.setValue('Test')
    const zip = await checkout_page.zipCode
    await zip.setValue('10036')
    await checkout_page.continue()
    await new Promise(resolve => setTimeout(resolve, 10000));
})

Then('I see {string} at checkout', async function(itemName) {
    const expected = await checkout_page.expectedItemName(itemName);
    assert.equal(itemName, expected);
})

Then('My item total price is {string}', async function(itemTotal) {
    const expected = await checkout_page.getItemTotal();
    assert.equal(itemTotal, expected);
})

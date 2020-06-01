class CartPage {

    async removeItemFromCart(itemName){
        const element = await $(`//div[@class='inventory_item_name' and text()='${itemName}']/../following-sibling::div[2]/button`);
        element.click();
    }

    async getCartItemName(itemName){
        const element = await $(`//div[@class='inventory_item_name' and text()='${itemName}']`)
        return element.getText()
    }

    async continueShopping(){
        const element = await $('.cart_footer .btn_secondary')
        element.click()
    }

    async navigateToCheckout(){
        const element = await $('.checkout_button')
        element.click()
    }
}
module.exports = CartPage;
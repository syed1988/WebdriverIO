class ProductPage {
    async sortProducts(visibleText){
        const selectBox = await $('.product_sort_container');
        await selectBox.selectByVisibleText(visibleText);
    }

    async addItem(itemName){
        const item = await $(`.//div[@class='inventory_item_name' and text()= '${itemName}']/../../following-sibling::div/button`);
        item.click();
    }

    async getItemPrice(itemName){
        const element = await $(`//div[@class='inventory_item_name' and text()='${itemName}']/../../following-sibling::div/div`)
        return element.getText()
    }

    async goToCart(){
        const shoppingCart = await $('.shopping_cart_link');
        shoppingCart.click();
    }
}
module.exports = ProductPage;
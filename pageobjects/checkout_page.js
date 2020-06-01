class CheckoutPage {
    get fname() {return $('#first-name')};
    get lname() {return $('#last-name')};
    get zipCode() {return $('#postal-code')};

    async continue(){
        const element = await $('input[value=CONTINUE]');
        element.click();
    }

    async getItemTotal(){
        const element = await $('.summary_subtotal_label')
        let itemTotal = await element.getText()
        return itemTotal.split(':')[1].trim()
    }
    
    async expectedItemName(itemName){
        const element = await $(`//div[@class='inventory_item_name' and text()='${itemName}']`)
        return element.getText()
    }
}

module.exports = CheckoutPage;
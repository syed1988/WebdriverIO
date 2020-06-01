Feature: Checkout
   As a customer I want to be able to sign in, add items, remove items and checkout.

Background: 
    Given I am in landing page
    When I enter 'standard_user' as my username
    And  I enter 'secret_sauce' as my password
    When I click submit 
    Then I am logged in

Scenario: Users can checkout
    Given I add 'Sauce Labs Bike Light' to cart
    And   I navigate to shopping cart
    And   I remove 'Sauce Labs Bike Light' from cart
    And   I continue shopping 
    When  I add 'Sauce Labs Fleece Jacket' with a price of '$49.99' to cart
    And   I navigate to shopping cart
    And   I navigate to checkout
    And   I enter my personal information
    Then  I see 'Sauce Labs Fleece Jacket' at checkout 
    And   My item total price is '$49.99'


    

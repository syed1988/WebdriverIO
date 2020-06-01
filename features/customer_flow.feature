Feature: Happy Paths
   As a customer I want to be able to sign in, add items, remove items and checkout.

Background: 
    Given I am in landing page
    When I enter 'standard_user' as my username
    And  I enter 'secret_sauce' as my password
    When I click submit 
    Then I am logged in

Scenario: Items are viewable in cart
    When I add 'Sauce Labs Fleece Jacket' to cart
    And  I add 'Sauce Labs Bike Light' to cart
    And  I navigate to shopping cart
    Then I see 'Sauce Labs Fleece Jacket' in the cart
    And  I see 'Sauce Labs Bike Light' in the cart

# Scenario: Users can checkout
#     When I add 'Sauce Labs Fleece Jacket' to cart

    

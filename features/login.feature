Feature: Log In
   As a customer I want to be able to sign in.

Background: 
    Given I am in landing page

Scenario: Log In
    When I enter 'standard_user' as my username
    And  I enter 'secret_sauce' as my password
    When I click submit 
    Then I am logged in

    

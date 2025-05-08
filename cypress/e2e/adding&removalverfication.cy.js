/// <reference types="cypress" />

import login from "../PageObjects/LoginPage";
import launch from "../PageObjects/siteLaunch";

describe("adding and removal verfication", ()=>{
    it("validationstarts", ()=>{
        const lau =  new launch()
        lau.launchSite()
              cy.get('.input_error form_input ,[placeholder="Username"]').type("standard_user")
              cy.get('.input_error form_input ,[placeholder="Password"]').type("secret_sauce")
              cy.get("input[type='submit']").click()
              cy.get("#add-to-cart-sauce-labs-backpack").click()
              cy.get(".shopping_cart_link").click()
              cy.get(".inventory_item_name").should("have.text","Sauce Labs Backpack")
              cy.get("#continue-shopping").click()
              cy.get("span.title").should("have.text",'Products')
              cy.get("#remove-sauce-labs-backpack").click()
              cy.get(".shopping_cart_link").click()
              cy.get(".cart_list").should("not.have.text","Sauce Labs Backpack")


        
        })
        


})


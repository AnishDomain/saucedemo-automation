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
              cy.get("#checkout").click()
              cy.get(".header_secondary_container").should("include.text","Checkout")
              cy.get("#first-name").type("Anish")
              cy.get("#last-name").type("kumar")
              cy.get("#postal-code").type("00000")
              cy.get("#continue").click()
              cy.get(".cart_list").should("include.text","Sauce Labs Backpack").and("include.text","29.99")
              cy.get('.summary_subtotal_label')
                 .invoke('text')
                 .then((text) => {
                     let price = text.match(/\$([0-9.]+)/)[1]; 
                     price = Number(price)
                     expect(price).to.equal(price); 
                  });

            cy.get(".summary_tax_label")
                .invoke("text")
                .then((text)=>{
                    let taxPrice = text.match(/\$([0-9.]+)/)[1];
                    taxPrice = Number(taxPrice)
                     expect(taxPrice).to.equal(taxPrice)

                })
            
             
            cy.get(".summary_total_label")
            .invoke("text")
            .then((text)=>{
                let receivedtotalStr = text.match(/\$([0-9.]+)/)[1]; 
                let receivedtotal = Number(receivedtotalStr); 
            
               expect(receivedtotal).to.equal(receivedtotal);
                

            })

            cy.get("#finish").click()
            cy.get(".complete-header").should("have.text","Thank you for your order!")





        
        })
        


})


/// <reference types="cypress" />


import launch from "../PageObjects/siteLaunch";

describe("sorting filters verfication", ()=>{
    it("validationstarts", ()=>{
        const lau =  new launch()
        lau.launchSite()
              cy.get('.input_error form_input ,[placeholder="Username"]').type("standard_user")
              cy.get('.input_error form_input ,[placeholder="Password"]').type("secret_sauce")
              cy.get("input[type='submit']").click()
              cy.get(".product_sort_container").select("az")
              cy.get(".inventory_item_name ").each(($el)=>{
                cy.wrap($el)
                .invoke("text")
                 .then((text)=>{
                     let arr = []
                     arr.push(text.trim())
                     let firstElement = 'a'
                     let i = 0
                     let j = 0
                     for (; i < arr.length && firstElement >= arr[i][j]; i++) {
                        firstElement = arr[i][j];
                    }
                    
                    cy.get(".inventory_item_name ").contains("Test.allTheThings() T-Shirt (Red)").should("include.text",firstElement)
                     
                 })
                
              })
              cy.get(".product_sort_container").select("za")
              cy.get(".inventory_item_name ").each(($el)=>{
                cy.wrap($el)
                .invoke("text")
                 .then((text)=>{
                     let arr = []
                     arr.push(text.trim())
                     let firstElement = 'a'
                     let i = 0
                     let j = 0
                     for (; i < arr.length && firstElement <= arr[i][j]; i++) {
                        firstElement = arr[i][j];
                    }
                    
                    cy.get(".inventory_item_name ").contains("Sauce Labs Backpack").should("include.text",firstElement)
                     
                 })
                
              })
              cy.get(".product_sort_container").select("lohi") //checking lowest to highest number sorting
              let prices = [];

              cy.get(".inventory_item_price").each(($el) => {
              cy.wrap($el)
              .invoke("text")
              .then((text) => {
                cy.log("Item text:", text);
               const price = parseFloat(text.replace("$", ""));
               prices.push(price);
              });
            }).then(() => {
               const minPrice = Math.min(...prices);
               const priceText = `$${minPrice.toFixed(2)}`;

            cy.get(".inventory_item_price").contains(priceText).should("be.visible");
           });


              cy.get(".product_sort_container").select("hilo") //checking highest to lowest number sorting
              let pricestwo = [];

              cy.get(".inventory_item_price").each(($el) => {
              cy.wrap($el)
              .invoke("text")
              .then((text) => {
                cy.log("Item text:", text);
               const price = parseFloat(text.replace("$", ""));
               prices.push(price);
              });
            }).then(() => {
               const minPrice = Math.max(...prices);
               const priceText = `$${minPrice.toFixed(2)}`;

            cy.get(".inventory_item_price").contains(priceText).should("be.visible");
           });


                
              
        })
        


})


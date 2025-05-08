/// <reference types="cypress" />

import login from "../PageObjects/LoginPage";
import launch from "../PageObjects/siteLaunch";

describe("loginvalidation", ()=>{
    it("validationstarts", ()=>{
        const lau =  new launch()
        
        
        lau.launchSite()

        cy.fixture("userCreds").then((data)=>{
            data.forEach((user)=>{
                const log =  new login()
                log.setUserName(user.username)
                log.setPassword(user.password)
                log.clickLogin()

                if(user.username==="standard_user" && user.password==="secret_sauce"){
                    log.verifyLogin()
                    cy.get("button#react-burger-menu-btn").click()
                    cy.get("#logout_sidebar_link").click()

                }
               
                else if(user.username==="problem_user" && user.password==="secret_sauce"){
                    log.verifyLogin()
                    cy.get("button#react-burger-menu-btn").click()
                    cy.get("#logout_sidebar_link").click()


                }
                else if(user.username==="error_user" && user.password==="secret_sauce"){
                    log.verifyLogin()
                    cy.get("button#react-burger-menu-btn").click()
                    cy.get("#logout_sidebar_link").click()


                }
                else{
                    cy.get('h3[data-test="error"]').should("have.text",user.expectedresult)
                }
                 
            })
        })
        



    })
})

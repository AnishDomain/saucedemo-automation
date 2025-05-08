
export default class login{

     setUserName(username){
        cy.get('.input_error form_input ,[placeholder="Username"]').type(username)

     }

     setPassword(password){
        cy.get('.input_error form_input ,[placeholder="Password"]').type(password)

     }

     clickLogin(){
        cy.get("input[type='submit']").click()

     }

     verifyLogin(){
        cy.get("span.title").should("have.text",'Products')
     }
}


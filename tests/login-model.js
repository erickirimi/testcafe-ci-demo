
import {Selector,t, Role } from 'testcafe';


class Login {
    constructor () {

        this.submitBtn = Selector('button').withAttribute('type', 'submit');
        this.userName = Selector('input').withAttribute('name', 'username'); 
        this.password = Selector('input').withAttribute('name', 'password'); 

    }

    async login () {

        this.submitBtn = Selector('button').withAttribute('type', 'submit');
        this.userName = Selector('input').withAttribute('name', 'username'); 
        this.password = Selector('input').withAttribute('name', 'password'); 
        await t
               .maximizeWindow()
               .wait(2000)
               .typeText(this.userName, 'Admin')
               .typeText(this.password, '$y$tem1234')
               .click(submitBtn);

               
    }
}

export default new Login();


   // #To do 
   // 1. Improve the logic using roles.
   // 2. Add Assertion for the notification 


    

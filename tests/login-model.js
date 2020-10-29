
import {Selector,t, Role } from 'testcafe';


class Login {
    constructor () {

        this.submitBtn = Selector('button').withAttribute('type', 'submit');
        this.userName = Selector(()=> document.getElementsByName('username')[0]); 
        this.password = Selector(()=> document.getElementsByName('password')[0]); 

    }

    async login () {

        this.submitBtn = Selector('button').withAttribute('type', 'submit');
        this.userName = Selector(()=> document.getElementsByName('username')[0]); 
        this.password = Selector(()=> document.getElementsByName('password')[0]); 
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


    

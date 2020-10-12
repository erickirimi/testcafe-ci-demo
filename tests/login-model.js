
import {Selector,t, Role } from 'testcafe';
import { AngularJSSelector, waitForAngular } from 'testcafe-angular-selectors';

class Login {
    constructor () {

        this.submitBtn = Selector('button').withAttribute('type', 'submit');
        this.userName = AngularJSSelector.byModel('user.username');
        this.password = AngularJSSelector.byModel('user.password');

    }

    async login () {

        this.submitBtn = Selector('button').withAttribute('type', 'submit');
        this.userName = AngularJSSelector.byModel('user.username');
        this.password = AngularJSSelector.byModel('user.password');
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


    

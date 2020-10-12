
import {Selector,t} from 'testcafe';

class TradeNavigation {

    constructor () {}

    async navigateToTradeForms () {

        await t
               .wait(2000)
               .click(Selector('#assetRegistryLink'))
               .click(Selector('#clientAssetRegistryLink'))
               .wait(2000);
               
          
    }
    async tradeProgressTrackerNavigation ()
    {
        await t
        .click(Selector('[class^="dx-button dx-button-success dx-widget dx-button-ha"]').find('div').withText('Save'))
        .click(Selector('span').withText('Approve Ticket'))
        .click(Selector('span').withText('Generate Ticket'))
        .wait(1000)
        .click(Selector('.btn.btn-danger[name="No"]'))
        .click(Selector('.dx-button-content').nth(2).find('span').withText('Order Match'))
        .wait(1000)
        .click(Selector('.btn.btn-danger[name="No"]'))
        .click(Selector('span').withText('Approve Settlement'))
        .click(Selector('span').withText('Raise Settlementlement Instructions'))
        .wait(1000)
        .click(Selector('.btn.btn-danger[name="No"]'))
        .click(Selector('span').withText('Settle Trade'));

    }
}

export default new TradeNavigation();
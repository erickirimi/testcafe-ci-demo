import {Selector, Role } from 'testcafe';
//import { AngularJSSelector, waitForAngular } from 'testcafe-angular-selectors';

import loginmodel from '../login-model';
import tradenavigationmodel from '../tradenavigation-model';

fixture `Fixed Treasury Bond Trade UI Test`
  .page `https://localhost:44300/`
  .beforeEach(loginmodel.login)
  .afterEach(async t => {
	  const { error } = await t.getBrowserConsoleMessages()
	  await t.expect(error[0]).notOk();
  });

test('Should FX-Bond security  Purchase given the correct data', async t => {

    await tradenavigationmodel.navigateToTradeForms();

    await t
    .wait(2000)
    .click(Selector('#buySecurities'))
    .click(Selector('#TreasuryBondPurchaseId'))
    .click(Selector('#FixedTreasuryBondPurchaseId'))
    .click(Selector('#PortfolioID').find('.dx-lookup-field'))
    .click(Selector('.row-fluid').nth(1).find('div').withText('Homers Portfolio 1'))
    .click(Selector('#CentralBankDepositoryAccountID').find('.dx-lookup-field'))
    .click(Selector('.row-fluid').nth(5).find('div').withText('Treasury Bonds'))
    .click(Selector('#FixedTreasuryBondID').find('.dx-lookup-field'))
    .click(Selector('.row-fluid').nth(10).find('div').withText('codeTestFTB'))
    .click(Selector('#MarketTypeID').find('.dx-lookup-field'))
    .click(Selector('.dx-item.dx-list-item').nth(18).find('div').withText('Secondary'))
    .click(Selector('#InvestorCashAccountID').find('.dx-lookup-field'))
    .click(Selector('.row-fluid').nth(18).find('div').withText('00074454'))
    .click(Selector('#InvestorTargetCashAccountID').find('.dx-lookup-field'))
    .click(Selector('.row-fluid').nth(20).find('div').withText('CAL Bank'))
    .click(Selector('#SettlementAccountID').find('.dx-lookup-field'))
    .click(Selector('.row-fluid').nth(22).find('div').withText('Fixed TreasuryBonds'))
    .click(Selector('#BrokerID').find('.dx-lookup-field'))
    .click(Selector('.dx-item.dx-list-item').nth(26).find('div').withText('Genghis'))
    .typeText(Selector('#FaceValueID'), '100')
    .typeText(Selector('#YieldRateID'), '8')
    .typeText(Selector('#DirtyPriceID'), '50')
    .click(Selector('.dx-lookup-field-wrapper').nth(10).find('div').withText('[Select One]'))
    .click(Selector('.dx-item.dx-list-item').nth(28).find('div').withText('Issue Date'))
    .click(Selector('.dx-lookup-field-wrapper').nth(11).find('div').withText('[Select One]'))
    .click(Selector('.dx-item.dx-list-item').nth(31).find('div').withText('Mark To Market'));

    await tradenavigationmodel.tradeProgressTrackerNavigation();
  
});

test('Should FX-Bond security  Sale given the correct data', async t => {

  await tradenavigationmodel.navigateToTradeForms();

  await t
  .wait(2000)
  .click(Selector('#sellSecurities'))
  .click(Selector('#TreasuryBondSaleId'))
  .click(Selector('#FixedTreasuryBondSaleId'))
  .click(Selector('.dx-lookup-field-wrapper').nth(1).find('div').withText('[Select One]'))
  .click(Selector('.row-fluid').nth(1).find('div').withText('Homers Portfolio 1'))
  .click(Selector('.dx-lookup-field-wrapper').nth(2).find('div').withText('[Select One]'))
  .click(Selector('.row-fluid').nth(5).find('div').withText('Treasury Bonds'))
  .click(Selector('.dx-lookup-field-wrapper').nth(3).find('div').withText('[Select One]'))
  .click(Selector('.dx-button-content').nth(116).find('span').withText('Cancel'))
  .click(Selector('.dx-lookup-field-wrapper').nth(3).find('div').withText('[Select One]'))
  .click(Selector('.dx-button-content').nth(116).find('span').withText('Cancel'))
  .click(Selector('.dx-lookup-field-wrapper').nth(4).find('div').withText('[Select One]'))
  .click(Selector('.row-fluid').nth(7).find('div').withText('CAL Bank'))
  .click(Selector('.dx-lookup-field-wrapper').nth(5).find('div').withText('[Select One]'))
  .click(Selector('.row-fluid').nth(9).find('div').withText('CAL Bank'))
  .click(Selector('.dx-lookup-field-wrapper').nth(6).find('div').withText('[Select One]'))
  .click(Selector('.row-fluid').nth(11).find('div').withText('Fixed TreasuryBonds'))
  .click(Selector('.dx-lookup-field-wrapper').nth(7).find('div').withText('[Select One]'))
  .click(Selector('.dx-item.dx-list-item').nth(17).find('div').withText('Genghis'))
  .typeText(Selector('#FaceValueID'), '100')
  .typeText(Selector('#YieldRateID'), '8')
  .typeText(Selector('#SalePriceID'), '25')

  await tradenavigationmodel.tradeProgressTrackerNavigation();

});

const AuthorizationPage = require('../pageobjects/authorization.page')
const RatesPage = require('../pageobjects/rates_page.page')

describe('Rates Page',()=>{
    it('Rates Page Test',async()=>{
        await AuthorizationPage.sidebarMenu.click()
        await expect(RatesPage.rateButton).toBeDisplayed()
        await RatesPage.rateButton.click()
        await expect(RatesPage.ratePage).toBeDisplayed()
        await RatesPage.ratePageBackButton.click()
    })
})
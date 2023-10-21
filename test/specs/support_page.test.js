const AuthorizationPage = require('../pageobjects/authorization.page')
const SupportPage=require('../pageobjects/support_page.page')

describe('Support Page',()=>{
    it('Support page test',async()=>{
        await AuthorizationPage.sidebarMenu.click()
        await expect(SupportPage.supportPageButton).toBeDisplayed()
        await SupportPage.supportPageButton.click()
        await expect(SupportPage.supportPage).toBeDisplayed()
        await SupportPage.supportPageBackButton.click()
    })
})
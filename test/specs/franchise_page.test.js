const AuthorizationPage = require('../pageobjects/authorization.page')
const FranchizePage = require('../pageobjects/franchise_page.page')

describe('Franchise Page',()=>{
    it('Franchize page test',async()=>{
        await AuthorizationPage.sidebarMenu.click()
        await expect(FranchizePage.franchizeButton).toBeDisplayed()
        await FranchizePage.franchizeButton.click()
        await expect(FranchizePage.franchizePage).toBeDisplayed()
        await FranchizePage.franchizePageBackButton.click()
    })
})
const AuthorizationPage = require('../pageobjects/authorization.page')
const OrderHistory = require('../pageobjects/order_history.page')

describe('Order History page',()=>{
    it('Login to app',()=>{
        driver.launchApp()
    })
    it('Testing Order history page',async()=>{
        await AuthorizationPage.loginToProfile()
        await AuthorizationPage.sidebarMenu.click()
        await expect(OrderHistory.orderHistoryButton).toBeDisplayed()
        await OrderHistory.orderHistoryButton.click()
        await expect(OrderHistory.orderHistoryPage).toBeDisplayed()
        await OrderHistory.orderHistoryBackButton.click()
    })
})  
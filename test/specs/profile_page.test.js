const AuthorizationPage = require('../pageobjects/authorization.page')
const ProfilePage = require('../pageobjects/profile_page.page')

describe('Testing profile page functions',()=>{
    it('Login to app',()=>{
        driver.launchApp()
    })
    it('Testing edit profile',async()=>{
        await AuthorizationPage.loginToProfile()
        await AuthorizationPage.sidebarMenu.click()
        await AuthorizationPage.profilePageButton.click()
        await expect(ProfilePage.editProfileButton).toBeDisplayed()
        await ProfilePage.editProfileButton.click()
        await expect(ProfilePage.nameField).toBeDisplayed()
        await ProfilePage.nameField.click()
        await ProfilePage.nameField.clearValue()
        await ProfilePage.nameField.addValue('Temur')
        await ProfilePage.editProfilePage.touchAction({
            action: "tap",
            x: 370,
            y: 230, 
          });
        await ProfilePage.saveButton.click()
        await expect(ProfilePage.editProfileButton).toBeDisplayed()
    })
})
const AuthorizationPage = require('../pageobjects/authorization.page')

describe("Testing authorization", () => {

  it("sign up with phone number", async () => {
    await AuthorizationPage.loginToProfile()
  });

  it("logout from profile", async () => {
    await expect(AuthorizationPage.sidebarMenu).toBeDisplayed()
    await AuthorizationPage.sidebarMenu.click();
    await expect(AuthorizationPage.profilePageButton).toBeDisplayed()
    await AuthorizationPage.profilePageButton.click();
    await expect(AuthorizationPage.logoutButton).toBeDisplayed()
    await AuthorizationPage.logoutButton.click();
    await expect(AuthorizationPage.permissionButton).toBeDisplayed()
    await AuthorizationPage.permissionButton.click();
  });

  it("sign up with incorrect OTP code", async () => {
    await expect(AuthorizationPage.sidebarMenu).toBeDisplayed()
    await AuthorizationPage.sidebarMenu.click();
    await expect(AuthorizationPage.signUpButton).toBeDisplayed()
    await AuthorizationPage.signUpButton.click();
    await expect(AuthorizationPage.signUpPhoneType).toBeDisplayed()
    await AuthorizationPage.signUpPhoneType.click();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await expect(AuthorizationPage.phoneNumberField).toBeDisplayed()
    await AuthorizationPage.phoneNumberField.click();
    await AuthorizationPage.phoneNumberField.addValue("888888888");
    await AuthorizationPage.apllyButton.click();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await expect(AuthorizationPage.otpField).toBeDisplayed()
    await AuthorizationPage.otpField.addValue("000000");
    console.log("Vveden nepravilniy parol");
    await expect(AuthorizationPage.sidebarMenu).not.toBeDisplayed()
    await new Promise((resolve) => setTimeout(resolve, 3000));
  });
});

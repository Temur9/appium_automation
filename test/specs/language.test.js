const AuthorizationPage = require("../pageobjects/authorization.page");
const Language = require("../pageobjects/language.page");

describe("Test to change language of application", () => {
    it('Login to app',()=>{
        driver.launchApp()
    })
    it("Switch to English language", async () => {
    await AuthorizationPage.loginToProfile();
    await AuthorizationPage.sidebarMenu.click();
    await AuthorizationPage.profilePageButton.click();
    await expect(Language.languagePageButton).toBeDisplayed();
    await Language.languagePageButton.click();
    await expect(Language.englishLanguageOption).toBeDisplayed();
    await Language.englishLanguageOption.click();
    await expect(Language.englishText).toBeDisplayed();
  });
  it("Switch to Uzbek language", async () => {
    await Language.uzbekLanguageOption.click();
    await expect(Language.uzbekText).toBeDisplayed();
  });
  it("Switch to Russian language", async () => {
    await Language.russianLanguageOption.click();
    await expect(Language.russianText).toBeDisplayed();
  });
});

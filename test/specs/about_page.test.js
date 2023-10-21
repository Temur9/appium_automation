const AuthorizationPage = require("../pageobjects/authorization.page");
const AboutPage = require("../pageobjects/about_page.page");

describe("About page", () => {
  it("About Page Test", async () => {
    await AuthorizationPage.sidebarMenu.click();
    await expect(AboutPage.aboutPageButton).toBeDisplayed();
    await AboutPage.aboutPageButton.click();
    await expect(AboutPage.aboutPage).toBeDisplayed();
    await expect(AboutPage.documantationPageButton).toBeDisplayed();
    await AboutPage.documantationPageButton.click();
    await expect(AboutPage.documentationPage).toBeDisplayed();
    await expect(AboutPage.usersAgreementButton).toBeDisplayed();
    await AboutPage.usersAgreementButton.click();
    await expect(AboutPage.usersAgreementPage).toBeDisplayed();
    await AboutPage.usersAgreementBackButton.click();
    await expect(AboutPage.dataProcessingButton).toBeDisplayed();
    await AboutPage.dataProcessingButton.click();
    await expect(AboutPage.dataProcessingPage).toBeDisplayed();
    await AboutPage.usersAgreementBackButton.click();
    await expect(AboutPage.questionsButton).toBeDisplayed();
    await AboutPage.questionsButton.click();
    await expect(AboutPage.questionsButtonPage).toBeDisplayed();
    await AboutPage.usersAgreementBackButton.click();
  });
});

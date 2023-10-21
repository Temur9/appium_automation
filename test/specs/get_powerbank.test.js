const AuthorizationPage = require("../pageobjects/authorization.page");
const MyCards = require("../pageobjects/my_cards.page");
const GetPowerbank = require("../pageobjects/get_powerbank.page");

describe("Test for getting powerbanks", () => {
  it("Get without added card", async () => {
    await AuthorizationPage.loginToProfile();
    await GetPowerbank.getPowerbankButton.click();
    await MyCards.addCardButton.click();
    await MyCards.addingCard();
    await new Promise((resolve) => setTimeout(resolve, 15000));
    await expect(GetPowerbank.cantScanCodeButton).toBeDisplayed();
    await GetPowerbank.cantScanCodeButton.click();
    await GetPowerbank.stationCodeField.addValue("400052");
    await expect(GetPowerbank.rentPageText).toBeDisplayed();
    await expect(GetPowerbank.typeOfPayment).toBeDisplayed();
    await GetPowerbank.rentButton.click();
  });
  it("Get with added card", async () => {
    await GetPowerbank.getPowerbankButton.click();
    await expect(GetPowerbank.cantScanCodeButton).toBeDisplayed();
    await GetPowerbank.cantScanCodeButton.click();
    await GetPowerbank.stationCodeField.addValue("400052");
    await expect(GetPowerbank.rentPageText).toBeDisplayed();
    await expect(GetPowerbank.typeOfPayment).toBeDisplayed();
    await GetPowerbank.rentButton.click();
  });
});

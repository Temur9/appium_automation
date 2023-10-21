const AuthorizationPage = require("../pageobjects/authorization.page");
const MyCards = require("../pageobjects/my_cards.page");

describe("Testing add and delete cards", () => {
  it('Login to app',()=>{
    driver.launchApp()
})
  it("Add new card", async () => {
    await AuthorizationPage.loginToProfile();
    await AuthorizationPage.sidebarMenu.click();
    await MyCards.myCardsPageLink.click();
    await expect(MyCards.myCardsPage).toBeDisplayed();
    await MyCards.addCardButton.click();
    await MyCards.addingCard()
    await new Promise((resolve) => setTimeout(resolve, 15000));
    await expect(MyCards.myCardsPage).toBeDisplayed();
  });

  it("Delete added card", async () => {
    await MyCards.myCardsPage.touchAction({
      action: "tap",
      x: 570,
      y: 450,
    });
    await expect(MyCards.deletePopup).toBeDisplayed();
    await MyCards.deleteButton.click();
  });

  it('Add new card negative case',async()=>{
    await MyCards.addCardButton.click();
    await MyCards.addingCard()
    await MyCards.cardOtpField.addValue('123456')
    await expect(MyCards.deleteCardButton).not.toBeDisplayed();
  })
});

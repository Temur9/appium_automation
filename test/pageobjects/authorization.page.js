class AuthorizationPage{
    get startPageText(){return $('//android.view.View[@content-desc="Добро пожаловать"]')}
    get languageButton () { return $('//android.widget.Button[@content-desc="Pусский"]')}
    get signUpPhoneType(){return $('//android.widget.ImageView[@content-desc="Телефон"]')}
    get phoneNumberField(){return $( "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText")}
    get apllyButton(){return $('//android.widget.Button[@content-desc="Подтвердить"]')}
    get otpField(){return $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText")}
    get sidebarMenu(){return $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.widget.Button[1]")}
    get profilePageButton(){return $('//android.view.View[@content-desc="Профиль"]')}
    get logoutButton(){return $('//android.widget.Button[@content-desc="Выйти из аккаунта"]')}
    get permissionButton(){return $('//android.widget.Button[@content-desc="Bыйти"]')}
    get signUpButton(){return $('//android.view.View[@content-desc="Войти в профиль"]')}

    //Function for Login to profile
    async loginToProfile(){
        await expect(this.startPageText).toBeDisplayed()
        await expect(this.languageButton).toBeDisplayed()
        await this.languageButton.click()
        await new Promise((resolve) => setTimeout(resolve, 1000));
        await expect(this.signUpPhoneType).toBeDisplayed()
        await this.signUpPhoneType.click();
        await new Promise((resolve) => setTimeout(resolve, 1000));
        await expect(this.phoneNumberField).toBeDisplayed()
        await this.phoneNumberField.click();
        await this.phoneNumberField.addValue("888888888");
        await this.apllyButton.click();
        await new Promise((resolve) => setTimeout(resolve, 2000));
        await expect(this.otpField).toBeDisplayed()
        await this.otpField.addValue("121212");
        await new Promise((resolve) => setTimeout(resolve, 3000));
    } 
}

module.exports = new AuthorizationPage()
class MyCards{
    get myCardsPageLink(){return $('//android.view.View[@content-desc="Мои карты"]')}
    get addCardButton(){return $('//android.widget.Button[@content-desc="+ Добавить карту"]')}
    get cardNumberInput(){return $('.android.widget.ImageView')}
    get cardDateInput(){return $('.android.widget.EditText')}
    get bindButton(){return $('//android.widget.Button[@content-desc="Привязать"]')}
    get deleteCardButton(){return $('//android.widget.ImageView[@content-desc="8600 14** **** 4549 Удалить"]')}
    get myCardsPage(){return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[1]/android.view.View')}
    get deletePopup(){return $('//android.view.View[@content-desc="Удалить карту?"]')}
    get deleteButton(){return $('//android.widget.Button[@content-desc="Удалить"]')}
    get cardOtpField(){return $('.android.widget.EditText')}

    async addingCard(){
        await this.cardNumberInput.click();
        await this.cardNumberInput.addValue("8600140247464549");
        await this.cardDateInput.addValue("0125");
        await this.bindButton.click();
    }
}

module.exports=new MyCards()
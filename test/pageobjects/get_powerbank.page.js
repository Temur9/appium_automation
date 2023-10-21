class GetPowerbank{
    get getPowerbankButton(){return $('//android.widget.Button[@content-desc="Взять повербанк"]')}
    get cantScanCodeButton(){return $('//android.view.View[@content-desc="Не можете отсканировать?"]')}
    get stationCodeField(){return $('.android.widget.EditText')}
    get rentPageText(){return $('//android.view.View[@content-desc="Аренда"]')}
    get typeOfPayment(){return $('.android.widget.ImageView')}
    get rentButton(){return $('//android.widget.Button[@content-desc="Арендовать сейчас"]')}
}

module.exports = new GetPowerbank()
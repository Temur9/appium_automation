class RatesPage{
    get rateButton(){return $('//android.view.View[@content-desc="Тарифы"]')}
    get ratePage(){return $('//android.view.View[@content-desc="Тарифы"]')}
    get ratePageBackButton(){return $('//android.widget.Button[@content-desc="Назад"]')}
}

module.exports=new RatesPage()
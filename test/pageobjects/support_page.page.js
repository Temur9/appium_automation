class SupportPage{
    get supportPageButton(){return $('//android.view.View[@content-desc="Поддержка"]')}
    get supportPage(){return $('//android.view.View[@content-desc="mail@qwatt.uz"]')}
    get supportPageBackButton(){return $('//android.widget.Button[@content-desc="Назад"]')}
}

module.exports=new SupportPage()
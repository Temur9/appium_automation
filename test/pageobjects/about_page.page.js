class AboutPage{
    get aboutPageButton(){return $('//android.view.View[@content-desc="О приложении"]')}
    get aboutPage(){return $('//android.view.View[@content-desc="Разработано компанией Udevs"]')}
    get documantationPageButton(){return $('//android.view.View[@content-desc="Документация"]')}
    get documentationPage(){return $('//android.widget.ImageView[@content-desc="Узбекистан"]')}
    get usersAgreementButton(){return $('//android.view.View[@content-desc="Пользовательские соглашения"]')}
    get usersAgreementPage(){return $('//android.view.View[@content-desc="ПУБЛИЧНАЯ ОФЕРТАНА ЗАКЛЮЧЕНИЕ ДОГОВОРА ПРОКАТА ЗАРЯДНОГО УСТРОЙСТВА"]')}
    get usersAgreementBackButton(){return $('//android.widget.Button[@content-desc="Назад"]')}
    get dataProcessingButton(){return $('//android.view.View[@content-desc="Обработка данных"]')}
    get dataProcessingPage(){return $('//android.view.View[@content-desc="Политика конфиденциальности "]')}
    get questionsButton(){return $('//android.view.View[@content-desc="Вопросы о Qwatt"]')}
    get questionsButtonPage(){return $('//android.view.View[@content-desc="1.Как я могу возвратить повербанк обратно в станцию?  "]')}
}

module.exports=new AboutPage()
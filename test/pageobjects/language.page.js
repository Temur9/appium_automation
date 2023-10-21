class Language{
    get languagePageButton(){return $('//android.view.View[@content-desc="Язык"]')}
    get englishLanguageOption(){return $('//android.view.View[@content-desc="English"]')}
    get englishText(){return $('//android.view.View[@content-desc="Language"]')}
    get uzbekLanguageOption(){return $('//android.view.View[@content-desc="O’zbek"]')}
    get uzbekText(){return $('//android.view.View[@content-desc="Til"]')}
    get russianLanguageOption(){return $('//android.view.View[@content-desc="Pусский"]')}
    get russianText(){return $('//android.view.View[@content-desc="Pусский"]')}
}

module.exports=new Language()
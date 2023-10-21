class FranchizePage{
    get franchizeButton(){return $('//android.view.View[@content-desc="Франчайзинг"]')}
    get franchizePage(){return $('//android.view.View[@content-desc=", чтобы узнать подробности."]')}
    get franchizePageBackButton(){return $('//android.widget.Button[@content-desc="Назад"]')} 
}

module.exports=new FranchizePage()
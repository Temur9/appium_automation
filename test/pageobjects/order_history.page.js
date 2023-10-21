class OrderHistory{
    get orderHistoryButton(){return $('//android.view.View[@content-desc="История заказов"]')}
    get orderHistoryPage(){return $('//android.view.View[@content-desc="Здесь пока пусто и грустно"]')}
    get orderHistoryBackButton(){return $('//android.widget.Button[@content-desc="Назад"]')}
}

module.exports=new OrderHistory()
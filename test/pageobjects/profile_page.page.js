class ProfilePage{
    get editProfileButton(){return $('//android.widget.Button[@content-desc="Изменить"]')}
    get nameField(){return $('android.widget.EditText')}
    get saveButton(){return $('//android.widget.Button[@content-desc="Сохранить"]')}    
    get editProfilePage(){return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View')}
}

module.exports=new ProfilePage()
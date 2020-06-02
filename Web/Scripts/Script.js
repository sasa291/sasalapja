class Login{
    
    static login() {
        if (document.getElementById('username') != null && document.getElementById('password') != null) {
            var name =document.getElementById('username').value;
            var pw = document.getElementById('password').value;
            if (name == "Admin" && pw == "password") {
                this.logindate = Date.now("HH.mm");
                //UserSession.SetUserSession(name, Date.now()); 
                //window.alert(imported.UserSession.GetUserSession());
                $(location).attr('href', 'index2.html');
            }
            else 
            {

                window.alert("Hibás felhasználónév vagy jelszó");
            }
        }

    }

    static logout()
    {
        $(location).attr('href', 'index.html');
    }
}

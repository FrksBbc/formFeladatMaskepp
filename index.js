document.getElementById('errorBoxClose').onclick = function() {
    document.getElementById('errorBox').style.display = 'none';
}

function formValidate(){

    // ha nem vesszük el, akkor is piros lesz ha javitjuk
    document.getElementById('username').classList.remove('redBorder');
    document.getElementById('email').classList.remove('redBorder');
    document.getElementById('pwd1').classList.remove('redBorder');
    document.getElementById('pwd2').classList.remove('redBorder');

    var error = false;
    var errorMsgHtml = "";

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var pwd1 = document.getElementById('pwd1').value;
    var pwd2 = document.getElementById('pwd2').value;

    //Ha az felhasz üres!
    if(username == ""){
        error = true;
        errorMsgHtml += '<li>A felhasználó név kitöltése kötelező!</li>';
       document.getElementById('username').classList.add('redBorder');
        //Ha az felhasz kisebb mint 5
    } else if(username.length < 5){
        error = true;
        errorMsgHtml += '<li>A felhasználónév minimum 5 karakter!</li>';
        document.getElementById('username').classList.add('redBorder');
        //Ha az felhasz nagyobb mint 20
    } else if(username.length > 20){
        error = true;
        errorMsgHtml += '<li>A felhasználónév maximum 20 karakter!</li>';
    }
    //ha az email üres
    if(email ==""){
        error = true;
        errorMsgHtml += '<li>Az email kitöltése kötelező!</li>';
        document.getElementById('email').classList.add('redBorder');
        //Ha a formátum nem helyes
    }else if(!validateEmail(email)){
        error = true;
        errorMsgHtml += '<li>Helytelen formátum!</li>'
        document.getElementById('email').classList.add('redBorder');
    }
    //Jelszó, üres maradt, rövid, hosszú,nem egyezik
    if(pwd1 == ""){
        error = true;
        errorMsgHtml += ' <li>Nem adtál meg jelszót!</li> ';
        document.getElementById('pwd1').classList.add('redBorder');
    } else if(pwd1.length <6){
        error = true;
        errorMsgHtml += ' <li>A megadott jelszó rövid (min 6)</li> ';
    }else if(pwd1.length> 30){
        error= true;
        errorMsgHtml += '<li>A megadott jelszó hosszú (min 30)</li>';
        document.getElementById('pwd1').classList.add('redBorder');
    }else if(pwd1 != pwd2){
        error = true;
        errorMsgHtml += '<li>A két jelszó nem egyezik!</li>';
        document.getElementById('pwd1').classList.add('redBorder');
        document.getElementById('pwd2').classList.add('redBorder');
    }

    //volt -e hiba?
   if(error) {
        //Hiba volt
        //A listába kell írnunk a hibaüzenetet

        document.getElementById("errorList").innerHTML = errorMsgHtml;
        document.getElementById('errorBox').style.display = 'block';
      //ne továbbítson
        return false;
    } else {
        //Továbbítás
        return true;
    }
}
    //email ellenőrző, bónusz
    //ezt a stackoverflown találtam!
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    

}
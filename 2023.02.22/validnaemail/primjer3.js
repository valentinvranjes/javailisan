function checkEmail(email){
    var i = email.indexOf("@");
    console.log("search index = " + i);
    if (i > 0){
        var tmpEmailDomain = email.substring(i+1, email.length);
        var z = tmpEmailDomain.indexOf (".");
        console.log ("search index z = " + z);
        if (z > 0){
            return true;
        }
        return false;
        } else {  
        return false;
    }   
}

var isEmailOk = checkEmail("mojeime@email.com");
console.log("email ok = " + isEmailOk);

return;
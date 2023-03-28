function checkEmail(email){
    var i = email.indexOf("@");
    console.log("search index = " + i);
    if (i > 0){
        var z = email.indexOf (".");
        console.log("search index z = " + z);
        if (z > 0){
            return true;
        }
        return false;
        } else {  
        return false;
    }   
}

var isEmailOk = checkEmail("moje.imeemailcom"); // kako ovo popraviti?
console.log("email ok = " + isEmailOk);

return;
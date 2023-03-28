function checkEmail(email){
    if (email.contains("@")){
        return true;
    } else {
        return false;
    }   
}

var isEmailOk = checkEmail("mojeime@email.com");
console.log("email ok = " + isEmailOk);

return;
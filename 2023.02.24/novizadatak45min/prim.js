// const { _ } = require("core-js");

// 1.
var dobro = 1234567890;
var lose = "1123456";
/* var jedinstveniZnakovi = function(password) {
    // vas kod
    console.log("test " + password);
    let isNum = _.isNumber(password);
    console.log("is number " + isNum);
}
*/
/*
function isUniqueCharacters(password)
{
  var myArray = [];
  for (var i = 0; i <= password.length; i++) {
    var MyChar = password.charAt(i);
    if (!myArray.includes(MyChar))
    {
      myArray.push(myChar);
    }
    else
    {
        return false;
    }
}

return true;


for (var j = 0; j < myArray.length; j++) {
  console.log(myArray[j]);
}

jedinstveniZnakovi(dobro);
jedinstveniZnakovi(lose);
*/

function isVeciOd10(password){
    if (password.length > 10)
    {
        return password.substring(0, 10);
    }
    return password;
}
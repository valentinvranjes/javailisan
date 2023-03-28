var text = "lorem ipsum dolor sit amet.";

var length = text.length;
// console.log("duljina teksta = " + length);
var wordSit = text.substr(19, 3); // Ili neka druga metoda je ok
var wordSit2 = text.substring(19, 19 + 3); 

// console.log(wordSit);
// console.log(wordSit2);

text = text.replace('amet', 'elit'); // Ili regex, ako netko bas zna
// console.log (text);

var newText = text + ', consectur adipicke materine';
// console.log(newText);

// text = text.toUpperCase();
// console.log(text);

// text.trim();
// console.log(text);

// text.trimEnd();
// console.log(text);

text.trim();
var aa = text.charAt(12);

console.log(text.charAt(0));
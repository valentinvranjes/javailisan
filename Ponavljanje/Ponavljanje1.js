// 1. var firstName i lastName i spojiti u varijablu fullName - s razmakom ("") između imena i prezimena.
var firstName = "Valentin";
var lastName = "Vranjes";
var fullName = firstName + " " + lastName;
// ista stvar se može dobiti na ovaj način: var fullName = `${firstName} ${lastName}`; - pri tome koristimo navodnik altgr7, a ne obične navodnike,

console.log("first name: " + firstName);
console.log("last name: " + lastName);
console.log("full name: " + fullName);
console.log(fullName);

// 2. Razlomiti ovu ternarnu operaciju na 3 različite operacije: var x = z === 2? y : 5;

var z = 2;
var y = 17;
var x;
if (z === 2) {
	x = y;
} else {
	x = 5;
}
/* ovo je rješenje u kojem je ternarna operacija razlomljena na 3 različite operacije:
var x;
if (z === 2) {
	x = y;
} else {
	x = 5;
}
no da bi provjerili točnost, naknadno dodajemo vrijednosti za z i za y.
*/ 

console.log("x = " + x);

// 3. Napišite petlju koja će prolaziti kroz brojeve od 1 do 20. Za svaku će iteraciju provjeriti je li trenutni broj paran ili neparan.


for (var i = 1; i <= 20; i++) {
	if (i % 2 == 0) {
		console.log('Broj ' + i + ' je paran.');
	} else {
		console.log('Broj ' + i + ' je neparan.');
	}
}

/* Zadatak se može rješiti i na ovaj način, gore smo pitali da li je 2 jednako nuli.
for (var i = 1; i <= 20; i++) {
	if (i % 2) {
		console.log('Broj ' + i + ' je neparan.');
	} else {
		console.log('Broj ' + i + ' je paran.');
	}
}
*/

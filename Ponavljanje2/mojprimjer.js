var ime = " Lorem ";
var prezime = " Ipsum ";
godine = 20;
var grad = " Bern ";
var kucniBroj = 222;
var moto = "repetitio est mater studiorum";

/*
document.write(ime + prezime + " ima " + godine + " godina", " iz grada " + grad + "živi na kućnom broju " + kucniBroj);
*/

let novac;
novac = "Pecunia non olet";
console.log(novac);
console.log(typeof(novac));
console.log(typeof(kucniBroj));

var kuca_monteCarlo = 3000000;
var kuca_istra = 2000000;

if(kuca_istra < kuca_monteCarlo) {
    console.log ("Kuća u Istri vrijedi manje od kuće u Monte Carlu");
} else if (kuca_istra > kuca_monteCarlo){
    console.log ("Kuća u Istri vrijedi više od kuće u Monte Carlu");
} else if (kuca_istra = kuca_monteCarlo) {
    console.log ("Obje kuće vrijede jednako");
}

var auto_pezejac = 2000;
var auto_peglica = 3000;

if(auto_pezejac > auto_peglica) {
    console.log ("Pezejac je skuplji od Pelgice");
} else {
    console.log ("Peglica je skuplja od Pezejca");
}

var mjesec = 2;

if(mjesec === 1) {
    console.log("Siječanj");
} else if (mjesec === 2) {
    console.log("Veljača");
} else if (mjesec === 3) {
    console.log("Ožujak");
} else if (mjesec === 4) {
    console.log("Travanj");
} else if (mjesec === 5) {
    console.log("Svibanj");
} else if (mjesec === 6) {
    console.log("Lipanj");
} else if (mjesec === 7) {
    console.log("Srpanj");
} else if (mjesec === 8) {
    console.log("Kolovoz");
} else if (mjesec === 9) {
    console.log("Rujan");
} else if (mjesec === 10) {
    console.log("Listopad");
} else if (mjesec === 11) {
    console.log("Studeni");
} else if (mjesec === 12) {
    console.log("Prosinac");
}

// Kako bi dobili prethodno, nije potrebno pisati toliko linija teksta, može i ovako:
switch(mjesec) {
    case 1:
        console.log("Siječanj")
}
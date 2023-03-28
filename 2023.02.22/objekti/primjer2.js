var osoba = {
 ime : "ime",
 prezime : "prezime",
 brojCipela : 44
};

var isObrisano = delete osoba.godine;
console.log(isObrisano);

/*
osoba.ime = "Valentin";
osoba.prezime = "Vranješ";
osoba.godine = 100;
osoba.brojCipela = 43;
*/

if(osoba.brojCipela > 39) {
    console.log(`ime i prezime: ${osoba.ime} ${osoba.prezime}`)
}

// Kreiraj objekt koji reprezentira neki specifični auto, sa bar 8 svojstava, od kojih su tri funkcije

var auto = {
    marka: "WV",
    gorivo: "benzin",
    model: "Golf",
    godina: 2022,
    boja: "crvena",
    maxBrzina: 160,
    trenutnaBrzina: 0,
    ubrzaj: function(ubrzanje) {
        this.trenutnaBrzina += ubrzanje; // može se zapiati i kao this.trenutnaBrzina = trenutna.brzina + ubrzanje
        return this.trenutnaBrzina;
    },
    zakoci: function(brojSekundi){
        while (this.trenutnaBrzina > 0 && brojSekundi >= 0 ){
            this.trenutnaBrzina -= 10;
            console.info ("Trenutna brzina pri kočenju je: " + this.trenutnaBrzina); // console.info ili console.debug se može koristiti isto kao i console.log
            brojSekundi--;
            console.debug ("brojac: " + brojSekundi); 
        }
        return this.trenutnaBrzina;
    },
    brojKotaca: 4,
};


// npr. dodatno svojstvo brojKotaca = 4,

// ovo je drugi način:
// var auto {}; 
// auto.marka = "VW";

console.log("Ja vozim auto marke: " + auto.marka);
console.log("Auto vozi brzinom " + auto.trenutnaBrzina);
console.log("Auto nakon ubrzanja vozi brzinom " + auto.ubrzaj(60));
console.log("Auto nakon ubrzanja vozi brzinom " + auto.zakoci(30));
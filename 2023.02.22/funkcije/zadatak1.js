1. // napišite JS funkciju koja prihvaća zadani niz kao parametar i pronalazi najdužu riječ unutar niza

function traziNajduzuRijec(zadaniNiz){
    var najduzaRijecUFunkciji = "";
    for(let i = 0; i < zadaniNiz.length; i++){
        najduzaRijecUFunkciji = zadaniNiz[i];
        if (zadaniNiz[i].length > najduzaRijecUFunkciji.length){
            najduzaRijecUFunkciji = zadaniNiz[i];
        }
    }
    rijec = zadaniNiz[i];
    if (rijec.length > najduzaRijecUFunkciji.length){
        najduzaRijecUFunkciji =  rijec;
    }
    return najduzaRijecUFunkciji;
    }

var niz = ["Marko", "Ana", "Josipa", "Anamarija", "Ivo"];

var najduzeIme = traziNajduzuRijec(niz);

console.log(najduzeIme);

//

1. // napišite JS funkciju koja prihvaća zadani niz kao parametar i pronalazi najdužu riječ unutar niza
var rijec = "";
var najduzaRijecUFunkciji = "";
    var najduzaRijecUFunkciji = "";
    for(let i = 0; i < zadaniNiz.length; i++){
        if (zadaniNiz[i].length > najduzaRijecUFunkciji.length)
            najduzaRijecUFunkciji = rijec;
    }
return najduzaRijecUFunkciji;
}

var niz = ["Marko", "Ana", "Josipa", "Anamarija", "Ivo"];

var najduzeIme = traziNajduzuRijec(niz);

console.log(najduzeIme);

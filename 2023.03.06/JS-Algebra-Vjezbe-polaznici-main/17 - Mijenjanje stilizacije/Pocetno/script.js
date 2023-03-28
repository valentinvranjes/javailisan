// 	- umjesto circle buleta na elementima liste prikažu redne brojke
var ul1 = document.querySelector("ul");
ul1.style.listStyleType = "decimal";

// 	- div sa klasom info treba dobiti klasu koja će ga sakriti (dodajte u stylesheet)
var info =  document.querySelector(".info");
info.classList.add("hide");

// 	- saznajte margin-left izračunati stil koji je primijenjen na body elementu
var body = document.querySelector("body");
var sviStilovi = window.getComputedStyle(body, null);
var stilMarginLeft = sviStilovi.getPropertyValue("margin-left");
console.log(stilMarginLeft);

// 	- animirajte veličinu margine body elementa od pocetne do 30px i natrag u ponavljajućoj petlji
var pocetnaMargina = sviStilovi.getPropertyValue("margin");
console.log(pocetnaMargina);
var marginaBroj = parseInt(pocetnaMargina);
console.log(marginaBroj);

var animacija = setInterval(funcFrame, 10);
var unazad = false;
function funcFrame (
) {
    if (unazad == true) {
        marginaBroj--;
    } else {
        marginaBroj++;
    }
    console.log(marginaBroj);

    if (marginaBroj == 30) {
        unazad = true;
        console.log("<<<<<<<<<");
    }
    if (marginaBroj == 0) {
        unazad = false;
        console.log(">>>>>>>>>")
    }
    marginaBroj++;
    marginaBroj--;
    body.style.margin = marginaBroj;
}
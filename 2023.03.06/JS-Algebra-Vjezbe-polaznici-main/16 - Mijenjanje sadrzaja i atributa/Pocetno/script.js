// 1.
/*
var h1 = document.querySelector("h1");
h1.innerHTML = "<span>Karlovac</span>";
console.log("h1 inner html=" + h1.innerHTML);
console.log("h1 text content=" + h1.textContent);
console.log("h1 inner text=" + h1.textContent);
*/

// 2.
// var divDescription = document.querySelector(".description span");
// ovo je najjednostavniji: divDescription.ariaColSpan.innerHTML = " Grad na <h3>5 rijeka</h3>";
// divDescription.outerHTML = "<h3>5 rijeka</h3>";
// console.log("inner:" + divDescription.innerHTML);
// console.log("outter:" + divDescription.outterHTML);

// 3.
var info = document.querySelector(".info");
info.textContent = "Peta rijeka je piva";

// 4
var rijeke = ["Kupa", "Korana", "Dobra", "Mrežnica", "Karlovačko pivo"];
var footer = document.getElementById("footer");

var listItems = footer.getElementsByTagName("li");
for(let c = 0; c < rijeke.length; c++) {
    listItems[c].innerText = rijeke[c]
    // console.log(rijeke[c]);
    // footer.querySelectorAll("li")[c].innerText = rijeke[c];
}

// 3. Imate zadane vrijednosti:

// var divElement = document.getElementById("element");
var myPageOffsetY = 1300;
var myScrollTop = 200;
var myKirsnikEkran = 730;
var visinaElementa = 300;

var vidljivY = myKirsnikEkran - myPageOffsetY - myScrollTop;
console.log(vidljivY);

// if (vidljivY > 0) {
//     console.log(vidljivY);
// } else {
//     var fali = vidljivY + visinaElementa;
//     console.log ("da bi bio vidljiv, fali nam ");
// }

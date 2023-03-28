var y = document.createElement("h1");
y.innerText = "Ovo je nashe zaglavlje";

// 1.
var div = document.getElementsByClassName("description")[0];
div.parentNode.insertBefore(y, div);

// 2.
var divInfo = document.createElement("div");
divInfo.className = "info";
var foot = document.getElementById("footer");

foot.parentNode.insertBefore(divInfo, foot);

// 3.

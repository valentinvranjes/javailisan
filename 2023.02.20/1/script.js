var x = "Lorem ipsum";
(y = 2345), (z = "2345");
q = false;

// 1.
var trueFalse = !!"false" == !!"true";
console.log("1. " + trueFalse);
// console.log (!!"false");
// console.log(!(""));
// console.log(!(!("false")));
// return;

// 2.
console.log(q || x || y || z);

// 3.
// var num = 6;
// num = num--; // wtf moment
// console.log(num);

// 4.
const price = 26.5;
const taxRate = 0.082;

let totalPrice = price + price * taxRate;
totalPrice = totalPrice.toFixed(2); // funkciju treba vratiti u varijablu, da bi dobili točno rješenje

console.log("Total:", totalPrice);

// primjer teorija

var xy = "14";

if (xy === 14) {
  xy++;
} else {
  xy = 16;
}

// console.log("xy= " + xy);

// primjer teorija 2
var xy = "22";

if (x == 14) {
  xy++;
} else if (xy == 11) {
  xy = 16;
} else if (xy == 11) {
  xy = 18;
} else if (xy == 11) {
  xy = 17;
}

// console.log("xy= " + xy);

// vježba petlje
var count = 0;
while (count < 10) {
  console.log(count);
  count++;
}

// ovo je samo drugi način zapisa prethodnog
var count = 0;
do {
  console.log(count);
  count++;
} while (count < 10);

// izrazi

var count = 3;
while (count <= 20) {
  if (count % 9  == 0) {
    count++;
    continue;
  }
  console.log(count);
  count++
}


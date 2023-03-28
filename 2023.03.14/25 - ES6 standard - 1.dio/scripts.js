`use strict`;
// 1.
var a = 78;
var b = 34;
// delete a;
// delete window.b;
var myObject = {property1:1, property2:2, property1:1};
// 2.
const users = [
  { name: 'Fabio', surname: 'Biondi' },
  { name: 'Mario', surname: 'Rossi' },
];
const user = { name: 'Lorenzo', surname: 'Verdi' };
var noviUseri = [...users, user]; // ili: users = [...users, ...user]; ili ipak ne?? mora biti let users

// // console.log(noviUseri[2]);
// for(let i = 0; i < noviUseri.length; i++){
//   console.log(noviUseri[i].name);
// }

// console.log("---------------------");

// noviUseri.forEach(function(item) {
//   console.log(item.name);
// });

// console.log("---------------------");
// for (let c in noviUseri){
//   console.log(noviUseri[c].name);
// }
// return;


// 3.
for (let i = 0; i < 10; i++) {
  console.log(`This number is ` +i);
  setTimeout(function() {
   console.log('The number is ' + i);
 }, 1000);
}
// console.log(i);

// // 1.
// var x = "John Doe"; 
// function vratiNesto(name) {
//    var x = name;
//    function f() { return x; }
//    return f;
// }
// var y = vratiNesto("Jane Doe");
// var z = vratiNesto("Test")();

// console.log(z);

// function (name1) {
//    var x = name1;
//    function f() { return x; }
//    return f;
// } (name1)

// nameless:

// var name1 = "test";

// var a = (function vratiNesto(name) {
//    var x = name;
//    function f() 
//    { return x; }
//    return f;
// })(name1)

// console.log(a());
var dog = {
   vrsta : "pas",
   boja : "crna",
}

var person = {
   name: 'John',
   surname: 'Doe',
   pas : dog
   };

   console.log(person);
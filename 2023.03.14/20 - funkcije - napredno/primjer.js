var sc = require("./stepcounter");

sc.walk(); //1
console.log(sc.getTotalSteps()); //1

sc.walk(); // 2
sc.walk(); // 3
sc.walk(); // 4
console.log(sc.getTotalSteps()); //4
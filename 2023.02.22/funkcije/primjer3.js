var addOne = function(value) {
    return value + 1;
};

var myVar = addOne (1);

console.log(myVar);

// prethodni način se koristi zbog "bezimenih funkcija" - jer nema ime: function(value)

// neki normalniji način

function addOne(value){
    return value +1;
}

var myVar = addOne(1);
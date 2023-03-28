// prvi parametar

function myFunc(a, b) {
  if (!b) {
    b = 1;
  }
  return a + b;
}

myFunc(1);

// drugi parametar
function myFunc(a, b) {
    b = b || 1;
    return a + b;
  }
  
  myFunc(1,1);

  // treći - ovaj je "najčišći"

  function myFunc(a, b = 1) {
    return a + b;
  }
  
  myFunc(1,1);
  
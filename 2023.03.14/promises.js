function getX() {
  return Math.random() >= 0.5;
  // console.log(getX()) // ovaj nas "ne zanima"
}
var wait = new Promise((resolve, reject) => {
  const x = getX();
  console.log("> " + x); // ovaj nas zanima
  if (x) {
    return setTimeout(resolve, 1000);
  }
  return setTimeout(reject, 1000);
});
  wait.then(() => console.log("Yay!")).catch(() => console.log("Oh no!"));


  // Ako već niste, prepišite sve funkcije u arrow funkcije.
  // function getX() {
  //   return Math.random() >= 0.5;
  var getX = () => Math.random() >= 0.5;
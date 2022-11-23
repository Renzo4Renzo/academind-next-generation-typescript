// Code goes here!
const userName = "Max";
// userName = "Hello"; //"const" value can't be assigned again

let age = 31;
age = 29;

var result;
function add(a: number, b: number) {
  result = a + b;
  return result;
}
add(3, 4);
console.log(result);

if (age > 20) {
  var isOld = true; //var will be accesible outside curly braces, let won't
  //   let isOld = true;
}
// console.log(isOld);

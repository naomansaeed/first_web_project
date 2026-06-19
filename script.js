const a = 5;
let b = 10;

if (true) {
  const a = 15;
  let b = 20;
  var c = 25;

  console.log("Inside block:", a, b, c);
}

console.log("Outside block: ", a, b, typeof c);

// ----
const myArr = [3, 5, 7];
myArr = [2, 4, 6]; // failure expected
console.log(myArr);
myArr[1] = 17;
console.log(myArr);

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
//myArr = [2, 4, 6]; // failure expected
console.log(myArr);
myArr[1] = 17;
console.log(myArr);

// Type coersion
console.log(typeof null);
console.log([] == false);
console.log("10" + 5);
console.log("10" - 5);
console.log(0.1 + 0.2 === 0.3);

// function to check truthyness
function isTruthy(value) {
  return Boolean(value);

  // Option 2: Double negation (idiomatic)
  // return !!value;

  // Option 3: Implicit coercion in condition
  // return value ? true : false;
}

console.log(isTruthy(0));
console.log(isTruthy(""));
console.log(isTruthy(null));
console.log(isTruthy(undefined));
console.log(isTruthy(NaN));
console.log(isTruthy("hello"));
console.log(isTruthy([]));
console.log(isTruthy({}));

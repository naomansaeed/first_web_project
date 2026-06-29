// functions.js

const calculateTotal = function (price, tax) {
  let finalAmount = price + tax;
  console.log(`finalAmount: ${finalAmount}`);
};

function processOrder() {
  console.log("order started...");
}

calculateTotal(10, 20);
processOrder();

const cart = {
  items: [],
  add(p) {
    this.items.push(p);
  },
};

cart.add("Apple");
console.log(cart.items);

const tn = cart.add("Melon");
console.log(cart.items);
/*
const fn = cart.add;
fn("banana");
console.log(cart.items); */

const object = {
  value: 42,
  log: function () {
    console.log(this.value);
  },
};
const detached = object.log;
detached();

function calculateArea(radius) {
  if (typeof radius !== "number" || radius <= 0) {
    console.error(`Error: radius must be a positive number`);
    return null;
  }
  const pi = 3.14159;
  const area = pi * radius * radius;
  return area;
}
/*
function recieveInput() {

  do {const r = prompt(`Enter radius: ${r}`); } while (r ===);
  } */

console.log(calculateArea(7));
console.log(calculateArea(-3));
console.log(calculateArea("10"));

function calculateDiscount(originalPrice, discountPercent) {
  if (typeof originalPrice !== "number" || 
    originalPrice < 0 ||
    isNaN(originalPrice)
    ) {
    console.error(`Error: original price must be a non negative number.`);
    return null;
  }
  if (
    typeof discountPercent !== "number" ||
    discountPercent < 0 ||
    discountPercent > 100 ||
    isNaN(discountPercent)
  ) {
    console.error(`Error: Discount Percent should be between 0 and 100.`);
    return null;
  }

  const finalPrice = originalPrice * (1 - discountPercent / 100);
  return finalPrice;
}

console.log(calculateDiscount(100, 20));
console.log(calculateDiscount(50, 150));
console.log(calculateDiscount(-10, 10));
console.log(calculateDiscount("100", 10));

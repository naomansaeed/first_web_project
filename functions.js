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

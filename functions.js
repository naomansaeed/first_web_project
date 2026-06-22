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

const applyCoupon = function(cartTotal, couponCode) {
  // 1. Validate cartTotal: must be a finite number
  if (typeof cartTotal !== "number" || Number.isNaN(cartTotal) || !Number.isFinite(cartTotal)) {
    console.error(`Error: cartTotal must be a valid number.`);
    return null;
  }
  
  // 2. Validate couponCode: must be a string
  if (typeof couponCode !== "string") {
    console.error(`Error: couponCode must be a string.`);
    return null;
  }

  // 3. Apply discount based on code
  let finalPrice = cartTotal; // Default: no discount
  
  if (couponCode === "SAVE10") {
    finalPrice = cartTotal * (1 - 10 / 100); // 90% of original
  } else if (couponCode === "SAVE20") {
    finalPrice = cartTotal * (1 - 20 / 100); // 80% of original
  }
  // Any other code: finalPrice stays as cartTotal (no discount)

  // 4. Optional: Round to 2 decimal places for currency
  return Math.round(finalPrice * 100) / 100;
};

// 🧪 Test cases
console.log(applyCoupon(700, "SAVE20"));   // ✅ 560.00
console.log(applyCoupon(413, "SAVE10"));   // ✅ 371.70
console.log(applyCoupon(1026, "MY_EYES!")); // ✅ 1026.00 (no discount)
console.log(applyCoupon(0/0, "SAVE10"));   // ✅ Error + null (NaN input)
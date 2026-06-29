// initializing function as an expression
const applyCoupon = function (cartTotal, couponCode) {
	// confirm that the cartTotal value is numerical 
	if (typeof cartTotal !== "number" || Number.isNaN (cartTotal)) {
		// if not give error
		console.error (`Error: Value for cartTotal must be numerical`);
		return null;
	}
	// confirm that coupon code is a string
	else if (typeof couponCode !== "string") {
		// if not string, give error
		console.error (`Error: Value of couponCode must be a string`);
		return null;
	}
	else {
		// apply 10% discount for coupon code "SAVE10"
		if (couponCode === "SAVE10") {
			const discount = cartTotal * (10 / 100);
			const finalPrice = cartTotal - discount;
			// return final price as numerical value
			return finalPrice;

		} 
		// apply 20% discount for coupon code "SAVE20"
		else if(couponCode === "SAVE20") {
			const discount = cartTotal * (20/100);
			const finalPrice = cartTotal - discount;
			// return final price number
			return finalPrice;
		}else {
			// coupon is a string but not valid code. so we return cart total without any change.
			return cartTotal;
		}
	}
};

console.log(applyCoupon(700, "SAVE20"));
console.log(applyCoupon(413, "SAVE10"));
console.log(applyCoupon(1026, "MY_EYES!"));
console.log(applyCoupon((0/0), "SAVE10"));

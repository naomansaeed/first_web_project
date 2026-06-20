// Detailed breakdown with explicit comments
let userScore = 85;

if (userScore >= 90) {
  // If score is 90 or higher, execute this block and EXIT the if-chain
  console.log("Grade: A");
} else if (userScore >= 80) {
  // Only runs if the first check FAILED, AND this condition is TRUE
  // 85 >= 80 is true, so this block runs. The rest are ignored.
  console.log("Grade: B");
} else if (userScore >= 70) {
  // Skipped because a previous condition already matched
  console.log("Grade: C");
} else {
  // Fallback: runs ONLY if ALL previous conditions are false
  console.log("Grade: F");
}
// Output: "Grade: B"

// Detailed breakdown with explicit comments
let userRole = "admin";

switch (userRole) {
  case "guest":
    console.log("Access: Public pages only");
    break; // ⚠️ CRITICAL: Without this, JS will execute the next case too!

  case "member":
    console.log("Access: Forum + Profile");
    break;

  case "admin":
    console.log("Access: Full dashboard + user management");
    // Intentional fall-through example: admins also get member access
    console.log("Also has: Member privileges");
    break;

  default:
    // Runs if NO case matches (like the final 'else')
    console.log("Access: Invalid role detected");
    break;
}
// Output: "Access: Full dashboard + user management"

// Detailed breakdown with explicit comments
let isPremiumUser = true;
let age = 17;

// Standard if/else would take 4+ lines:
// let accessLevel;
// if (isPremiumUser && age >= 18) {
//   accessLevel = "VIP";
// } else {
//   accessLevel = "Standard";
// }

// Ternary equivalent (1 line, highly readable for simple logic):
let accessLevel = isPremiumUser && age >= 18 ? "VIP" : "Standard";

console.log(accessLevel); // Output: "Standard" (age check fails)

// Determine subscription fee based on plan type
let planType = "pro";
let monthlyFee;
// using switch statements.
switch (planType) {
  case "free":
    monthlyFee = 0;
    break;
  case "basic":
    monthlyFee = 5;
    break;
  case "pro":
    monthlyFee = 10;
    break;
  case "enterprise":
    monthlyFee = 25;
    break;
  default:
    monthlyFee = null;
    console.log("You have failed to select a plan.");
    break;
}
console.log(
  `You have selected the ${planType} plan which costs ${monthlyFee} $s.`,
);

const user = { profile: { name: "Alice" } };
console.log(user?.profile?.name); // Alice
console.log(user?.settings?.theme); // undefined
console.log(user.profile.name ?? "Guest"); // Alice

const config = { timeout: 0 };
console.log(config.timeout || 5000); // 5000
console.log(config.timeout ?? 5000); // 0

//----
/*
function calculateBonus(baseScore) {
  var tempScore = 0;
  if (baseScore > 50) {
    var multiplier = 2;
    tempScore = baseScore * multiplier;
  } else {
    var multiplier = 1;
    tempScore = baseScore;
  }
  return tempScore;
}

console.log(calculateBonus(80));
console.log(tempScore); */

// ✅ REFACTORED: Modern, Safe, and Encapsulated
function calculateBonus(baseScore) {
  // 1. Declare variables at FUNCTION scope
  //    This makes them accessible to the entire function,
  //    including the `return` statement, but NOT outside it.
  let tempScore;
  let multiplier;

  // 2. Assign values inside the BLOCK scope
  //    `let`/`const` keep these assignments safe within their blocks.
  if (baseScore > 50) {
    multiplier = 2;
  } else {
    multiplier = 1;
  }

  // 3. Calculate using function-scoped variables
  tempScore = baseScore * multiplier;

  // 4. Return the result
  //    The function hands back a value without polluting the global scope.
  return tempScore;
}

// 🧪 Test the refactored function
console.log(calculateBonus(80)); // Output: 160 ✅

// 🛑 Attempting to access internal variables now fails safely:
// console.log(tempScore);     // ❌ ReferenceError: tempScore is not defined
// console.log(multiplier);    // ❌ ReferenceError: multiplier is not defined

// ✨ Optimized Ternary Version (Same logic, cleaner syntax)
function additionalBonus(inputScore) {
  // Declare `multiplier` at the top with `const` (it won't be reassigned after this line)
  // The ternary operator (`condition ? trueVal : falseVal`) replaces the if/else block.
  const multiplier = inputScore > 50 ? 2 : 1;

  // Calculate and return directly. No intermediate `tempScore` needed.
  return inputScore * multiplier;
}

console.log(additionalBonus(70));

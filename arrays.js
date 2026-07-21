// 📦 Dataset: A list of user accounts
const users = [
  { id: 1, name: "Alice", role: "admin", active: true },
  { id: 2, name: "Bob", role: "user", active: false },
  { id: 3, name: "Charlie", role: "user", active: true },
  { id: 4, name: "Diana", role: "moderator", active: false }
];

// 🔍 Goal: Keep ONLY active users
const activeUsers = users.filter(user => {
  // The JS engine passes each user object into this callback one by one.
  // We evaluate a condition and return a boolean.
  // If true → user goes into the NEW array.
  // If false → user is skipped.
  return user.active === true;
});

console.log(activeUsers);
/* 
Output:
[
  { id: 1, name: "Alice", role: "admin", active: true },
  { id: 3, name: "Charlie", role: "user", active: true }
]
*/

// ⚠️ CRITICAL: Original array is completely untouched
console.log(users.length); // 4 (still contains inactive users)

// 💡 CONCISE SYNTAX (implicit return)
// When the callback body is a single expression, you can drop {} and return
const admins = users.filter(user => user.role === "admin");
console.log(admins); // [{ id: 1, name: "Alice", role: "admin", active: true }]

// filter passing scores that are greater than 70 or equal

const scores = [45, 88, 92, 65, 78, 50, 99, 70];

const passingScores = scores.filter(score => {
    return score >= 70;
});

//alternate way for single return statement
const failingScore = scores.filter(score => score < 70);

console.log(passingScores);
console.log(failingScore);
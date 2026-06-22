//loops.js

// The for loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//The while loop
let input = "";
while (input !== "quit") {
  input = prompt("Enter command (or type 'quit'):");
  console.log(`You typed: ${input}`);
}

// do-while loop
let isActive = true;
do {
  console.log("👋 Welcome! Loading menu...");
  isActive = confirm("Continue browsing?");
} while (isActive);

// for -of  loop example
const cart = [
  { item: "Apple", price: 1.5 },
  { item: "Bread", price: 3.0 },
];

for (const product of cart) {
  product.price *= 0.9; // Apply 10% discount
  console.log(`${product.item}: $${product.price.toFixed(2)}`);
}

// forEach() loop example
const tasks = [
  { id: 1, title: "Review PR", done: false },
  { id: 2, title: "Update README", done: true },
  { id: 3, title: "Deploy to staging", done: false },
];

// forEach iterates over every item and executes a callback function
tasks.forEach((task, index, arr) => {
  const status = task.done ? "✅" : "⏳";
  console.log(`${index + 1}. ${status} ${task.title}`);
});

// 🔴 This code has a bug. Find and fix it.
let count = 0;
while (count < 5) {
  console.log("Count:", count);
  // 👇 What's missing?
  count++;
}

// 🔴 This forEach can't stop early. Rewrite with for...of.
let numbers = [10, 20, 30, 40];
numbers.forEach((num) => {
  if (num === 30) return; // ❌ This only skips one item, doesn't break
  console.log(num);
});
// Goal: Print 10, 20 — then STOP when hitting 30

for (const num of numbers) {
  if (num === 30) {
    break;
  }
  console.log(num);
}

let myInput;
do {
  myInput = prompt("Please enter a number between 1-10: ");
  console.log(`You typed: ${myInput}`);
} while (myInput !== 0);

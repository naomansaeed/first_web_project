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

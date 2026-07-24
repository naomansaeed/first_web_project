// 1. OBJECT LITERAL CREATION
// Keys are strings (quotes optional if valid identifier)
// Values can be any data type: strings, numbers, arrays, even other objects
const product = {
  id: 101,
  name: "Wireless Mouse",
  price: 29.99,
  // Computed property name: key is evaluated dynamically during creation
  ["category_" + 2026]: "electronics", // Creates property "category_2026"
  "in-stock": true // Key has a hyphen → MUST use quotes
};

// 2. DOT NOTATION (Static, known keys)
console.log(product.name);       // "Wireless Mouse" ✅
console.log(product["in-stock"]);   // ❌ SyntaxError! JS thinks you mean (product.in) - stock

// 3. BRACKET NOTATION (Dynamic or special-character keys)
console.log(product["price"]);          // 29.99 ✅
console.log(product["in-stock"]);       // true ✅ (hyphen requires brackets)
console.log(product["category_" + 2026]); // "electronics" ✅ (dynamic string)

// 4. DYNAMIC KEY ACCESS (Using variables)
const searchKey = "price";
console.log(product[searchKey]);        // 29.99 ✅ (evaluates to product["price"])

// 5. WHAT HAPPENS IF KEY DOESN'T EXIST?
console.log(product.rating);            // undefined ✅ (dot notation)
console.log(product["warranty"]);       // undefined ✅ (bracket notation)
// Neither throws an error; they simply return `undefined`
console.log("new exercise starts here.");
// new exercise
const year = 2012;
// Creating a book object
const book = {
    title: "Anne of Green Gables",
    author: "Lucy Maud Montgomery",
    "publication-date": "1908-6-13",
    ["edition_" + year]: "Collector's Edition",
    price: "£9.99"
};

console.log(book.author);
console.log(book["publication-date"]);
const KeytoFind = "price";
console.log(book[KeytoFind]);
// non existent key
console.log(book["upcoming-reading-session"]);

// third object starts here

console.log("third object starts here");
//---

const user = {
  profile: {
    name: "Alice",
    "contact-info": {
      email: "alice@example.com",
      "phone-number": "+1-555-1234"
    }
  }
};

// ✅ Safe nested access with bracket notation for special keys
const name = user.profile.name;                          // "Alice"
const email= user.profile["contact-info"].email;         // "alice@example.com"
const ph = user.profile["contact-info"]["phone-number"]; // "+1-555-1234"

console.log(name, email, ph);

console.log("fourth object starts here.");
const sKey = "releaseYear";
const movie = {
    title: "Tangled",
    director: "Byron Howard",
    releaseYear: 2010,
    "box-office": "$ 592.5 M",
    "award_": "Grammy",
    cast: {
        "female-lead": "Mandy Moore",
        "male-lead": "Zachary Levi"
    }
};
//const award = movie["award_"]+year;
console.log(movie.title);
console.log(movie["box-office"]);
console.log(movie.cast["male-lead"]);
console.log(movie[sKey]);
console.log(movie["award_"]+" "+year);

console.log("fifth object starts here.");

// 📦 Object Definition
const taskManager = {
  tasks: [], // Data storage property

  // ✅ SHORTHAND SYNTAX (Modern, Preferred)
  // Receives a string, pushes it to the tasks array
  addTask(taskName) {
    // NOTE: For Component 2a, we use the object's name directly to access its properties.
    // In 2b, we will replace `taskManager.tasks` with `this.tasks` for dynamic binding.
    taskManager.tasks.push(taskName);
    console.log(`✅ Task added: "${taskName}"`);
  },

  // ✅ FUNCTION EXPRESSION SYNTAX (Older, but identical execution flow here)
  // Returns a formatted string of all current tasks
  getSummary: function() {
    if (taskManager.tasks.length === 0) {
      return "No tasks yet.";
    }
    // Template literal + join() for clean string generation
    return `📋 Tasks (${taskManager.tasks.length}):\n- ${taskManager.tasks.join("\n- ")}`;
  }
};

// 🔍 INVOCATION PATTERNS
// 1. Calling with arguments
taskManager.addTask("Review PR #42");
taskManager.addTask("Update documentation");

// 2. Calling and capturing return value
const summary = taskManager.getSummary();
console.log(summary);

// Output:
// ✅ Task added: "Review PR #42"
// ✅ Task added: "Update documentation"
// 📋 Tasks (2):
// - Review PR #42
// - Update documentation

console.log("sixth object starts here.");

const bankAccount = {
    balance: 0,

    deposit(amount) {
        return bankAccount.balance += amount;
    },

    withdraw(amount) {
        if (bankAccount.balance === 0) {
            console.log("Account is empty");
            return null;
        }
        else if (amount > bankAccount.balance) {
            console.log("Insufficient funds");
            return null;
        }
        else {
            const withdrawal = amount;
            bankAccount.balance -= amount;
            return withdrawal;
        }
    }
};

console.log(bankAccount.deposit(100));
console.log(bankAccount.withdraw(30));
console.log(bankAccount.balance);

const addMoney = bankAccount.deposit;
addMoney(50);
console.log(bankAccount.balance);
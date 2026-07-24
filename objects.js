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
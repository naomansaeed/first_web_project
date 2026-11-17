// Grabbing the target form
const form2 = document.getElementById("feedback-form");

// attching submit event
form2.addEventListener('submit', (e) => {
    // preventing default behavior
    e.preventDefault();
    // retrieving all form data
    const formData = new FormData(form2);

    // creating feedback Object
    const feedbackObject = {
        name: formData.get('name').trim(),
        email: formData.get('email').toLowerCase(),
        message: formData.get('message').trim(),
        category: formData.get('category'),
        isUrgent: formData.has('urgent'),
        submittedAt: new Date().toISOString()
    };

    // console output
    console.log(feedbackObject);

    // reset the form
    form2.reset();
});

// ---

// 📦 Scenario: We have a user profile, but some data is missing (null or empty strings).
// We want to clean it up before sending it to a database.
const rawProfile = {
  username: "dev_alex",
  age: 28,
  bio: null,          // ❌ We want to remove this
  location: "",       // ❌ We want to remove this
  role: "admin"
};

// 🛠️ THE PIPELINE
const cleanProfile = Object.fromEntries(
  // Step 1: Break the object into an array of [key, value] pairs
  Object.entries(rawProfile) 
  // Output of Step 1: [["username", "dev_alex"], ["age", 28], ["bio", null], ["location", ""], ["role", "admin"]]

  // Step 2: Filter the array. Keep only pairs where the value is "truthy"
  .filter(([key, value]) => {
    // If value is null or "", this returns false, and the pair is discarded
    return value !== null && value !== ""; 
  })
  // Output of Step 2: [["username", "dev_alex"], ["age", 28], ["role", "admin"]]

  // Step 3: Rebuild the object from the filtered array
); 
// Note: Object.fromEntries() wraps the whole chain.

console.log(cleanProfile);
// ✅ Final Output: { username: "dev_alex", age: 28, role: "admin" }

//---
// settings array
const apiSettingsArray = [
    //only the final setting for "theme" seems to show up in console output
    ["theme", "light"],
  ["theme", "dark"],
  ["fontSize", 16],
  ["notifications", true],
  ["language", "en"]
];
// converting array into object
const settingsObject = Object.fromEntries(apiSettingsArray);
// ouput
console.log(settingsObject);

// ---
// raw server config object
const serverConfig = {
  port: 8080,
  host: "localhost",
  sslCertificate: null,
  enableCache: false,
  maxConnections: 100
};

// cleanup pipeline
const activeConfig = Object.fromEntries(
    //breaking original object into array
    Object.entries(serverConfig)
    // applying filter on key & value array
    .filter(([key, value]) => {
        //removing values that are null or false
        return value !== null && value !== false;
    })
);

console.log(activeConfig);

//---

// email validation (inline)
const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("email-error");

// Helper function to check if email is valid (using a simple Regex)
const isValidEmail = (email) => {
  // This regex checks for standard "text@text.text" format
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// 1. Validate on BLUR (when user leaves the field)
emailInput.addEventListener("blur", (e) => {
  const value = e.target.value.trim();
  
  // Only validate if they actually typed something
  if (value !== "" && !isValidEmail(value)) {
    emailInput.classList.add("invalid"); // Add red border via CSS
    errorMsg.style.display = "inline";   // Show error text
  }
});

// 2. Clear errors on INPUT (as they type to fix it)
emailInput.addEventListener("input", (e) => {
  const value = e.target.value.trim();
  
  if (isValidEmail(value)) {
    emailInput.classList.remove("invalid");
    errorMsg.style.display = "none";
  }
});

// password validation

// fetching DOM elements
const password = document.getElementById("password");
const passwordFeedback = document.getElementById("password-feedback");

password.addEventListener('input', (e) => {
  //appearantly trimming password is a bad idea.
  const enteredPassword = e.target.value;

  // responding to empty input
  if (enteredPassword.length === 0) {
    passwordFeedback.textContent = "Password cannot be empty.";
    passwordFeedback.className = "feedback-text";
    return;
  }

  // checking for number presence
  const hasNumber = /\d/.test(enteredPassword);

  //validation logic
  if (enteredPassword.length < 8) {
    passwordFeedback.textContent = "Too Short";
    passwordFeedback.className = "feedback-text weak";
  }
  else if (!hasNumber) {
    passwordFeedback.textContent = "Add a number";
    passwordFeedback.className = "feedback-text medium";
  }
  else {
    passwordFeedback.textContent = "Strong Password";
    passwordFeedback.className = "feedback-text strong";
  }
});
// 1. Grab the form element
const form = document.querySelector("#registration-form");

// 2. Listen for the submit event
form.addEventListener("submit", (e) => {
  // 3. 🛑 ALWAYS prevent default (stops page reload)
  e.preventDefault();
  
  // 4. Extract all form data at once
  const formData = new FormData(form);
  
  // 5. Read individual fields
  const username = formData.get("username");    // "Alice"
  const email = formData.get("email");          // "alice@example.com"
  const role = formData.get("role");            // "user" or "admin"
  const newsletter = formData.has("newsletter"); // true if checked, false if not
  
  // 6. Process the data
  console.log(`Registering: ${username}`);
  console.log(`Email: ${email}`);
  console.log(`Role: ${role}`);
  console.log(`Newsletter: ${newsletter}`);
  
  // 7. Optional: Reset the form after submission
  form.reset();
});
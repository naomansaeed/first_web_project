// select main using id
const app = document.getElementById("app");
// select last list item by query
const lastItem = document.querySelector(".item:last-child");
// select inactive items
const inactive = document.querySelectorAll(".item:not(.active)");
// converting to array
const inactiveArr = Array.from(inactive).map(item => item.textContent);
//non existent
const fake = document.querySelector(".fake-class"); // output:null? | possible explanation: points to a memory address where nothing was found?
//select status card
const statusCard = document.getElementById("status-card");
//select status title
const statusTitle =  document.getElementById("status-title");
//select details paragraph
const details = document.querySelector(".details");
//select cancel button
const cancelBtn = document.getElementById("cancel-btn");

//console.log(app.innerHTML);
//console.log(lastItem.innerHTML);
console.log(fake);
console.log(inactiveArr);
//changing the class of status card from pending to success.
statusCard.classList.remove("pending");
statusCard.classList.add("success");
//changing the text for status title.
statusTitle.textContent = "Payment Successful.";
//change the text for details.
details.textContent = "Your receipt has been emailed.";
//disable cancel button
cancelBtn.setAttribute("disabled", "true");
cancelBtn.textContent = "Done";
//statusTitle.innerHTML= "<script>alert('hacked')</script>";

// 1. Grab a starting point (the button)
const editBtn = document.querySelector(".edit-btn");

// 2. Moving UP
const parentCard = editBtn.parentElement; 
// Grabs the <div class="card"> wrapping the button

const dashboard = editBtn.closest("#dashboard"); 
// Travels up past the div, past the section, and stops exactly at <section id="dashboard">

// 3. Moving DOWN (Scoped searching)
const metricInsideCard = parentCard.querySelector(".metric"); 
// Only searches INSIDE parentCard, ignoring the second card entirely.
console.log(metricInsideCard.textContent); // "Score: 100"

// 4. Moving SIDEWAYS
const heading = parentCard.previousElementSibling; 
// Grabs the <h2>User Stats</h2> because it sits right above the card in the HTML.
console.log(heading.textContent);

// ---

const deleteBtn = document.querySelector(".delete-btn");

const parentEl = deleteBtn.parentElement;

const innerSpan = parentEl.querySelector('span');

const sibEl = parentEl.nextElementSibling;

const todoEl = parentEl.closest('#todo-list');

console.log(deleteBtn.textContent);
console.log(parentEl.textContent);
console.log(innerSpan.textContent);
console.log(sibEl.textContent);
console.log(todoEl.textContent);
console.log(editBtn.nextSibling);

// ---

const toast = document.createElement("div");

toast.classList.add("notification", "success");
const mySpan = document.createElement("span");
mySpan.textContent = "Settings saved successfully!";
toast.appendChild(mySpan);

app.prepend(toast);

setTimeout(() => {
    toast.remove();
}, 5000);
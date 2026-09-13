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

console.log(app.innerHTML);
console.log(lastItem.innerHTML);
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
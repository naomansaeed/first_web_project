const inputEl = document.getElementById("item-input");
const btnEl = document.getElementById("add-btn");
const listEl = document.getElementById("item-list");

btnEl.addEventListener('click', () => {
    const temp = inputEl.value;
    if (temp.trim() === '') {
        console.log("Cannot add empty item");
        return;
    } else {
        const newEl = document.createElement('li');
        newEl.textContent = temp;
        listEl.appendChild(newEl);

        inputEl.value = '';
        inputEl.focus();
    }
});

inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        btnEl.click();
    }
});

const outer = document.getElementById("outer");
const middle = document.getElementById("middle");
const btn = document.getElementById("inner-btn");

outer.addEventListener("click", () => console.log("OUTER"));
middle.addEventListener("click", (e) => {
  console.log("MIDDLE");
  e.stopPropagation();
});
btn.addEventListener("click", () => console.log("BUTTON"));
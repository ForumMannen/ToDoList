const todos = [];

const inputToDo = document.querySelector("input");
const addButton = document.querySelector(".add_button");
const listOutput = document.querySelector("div");
const ul = document.querySelector("ul");

addButton.addEventListener("click", () => {
    const item = inputToDo.value;
    inputToDo.value = "";
    todos.push(item);
    printList();
})

function printList() {
    const lastItem = todos[todos.length - 1];
    const li = document.createElement("li");
    li.innerText = lastItem;
    ul.appendChild(li);
}

function removeFromList() {
 // 
}
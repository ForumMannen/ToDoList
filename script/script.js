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
    ul.appendChild(li);
    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-trash-can");
    li.appendChild(icon);
    const liText = document.createTextNode(lastItem);
    li.appendChild(liText);
    li.addEventListener("click", removeFromList);
}

function removeFromList(event) {
    const index = todos.indexOf(event.target.innerText);
    todos.splice(index, 1);
}
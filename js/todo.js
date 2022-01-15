const toDoForm = document.querySelector(".js-to-do");
const toDoInput = document.querySelector(".js-add-to-do");
const toDoList = document.querySelector(".js-list");
const TODOS_KEY = "todos";
const savedToDos = localStorage.getItem(TODOS_KEY);

let toDos = [];
if(savedToDos !== null){
const parsedToDos = JSON.parse(savedToDos);
toDos = parsedToDos;
parsedToDos.forEach(paintToDo);
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.className = "toDo";
    const span = document.createElement("span");
    span.innerText = `● ${newTodo}`;
    const button = document.createElement("button");
    button.innerText = "×";
    button.className = "toDo__button";
    button.addEventListener("click", deleteToDo);
    li.appendChild(button);
    li.appendChild(span);
    toDoList.appendChild(li);
}
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

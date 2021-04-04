const todoForm = document.querySelector(".js-toDoForm"),
    todoInput = todoForm.querySelector("input"),
    todoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let todos = [];
let newId = 1;

deleteTodo = (e) => {
    const btn = e.target;
    const li = btn.parentNode;
    todoList.removeChild(li);
    const cleanTodo = todos.filter((todo) => todo.id !== parseInt(li.id));
    todos = cleanTodo;
    saveTodos();
};

saveTodos = () => {
    localStorage.setItem(TODOS_LS, JSON.stringify(todos));
};

paintTodo = (text) => {
    const li = document.createElement("li");
    const delButton = document.createElement("button");
    const span = document.createElement("span");

    delButton.innerHTML = "❌";
    delButton.addEventListener("click", deleteTodo);
    span.innerText = text;
    li.id = newId;

    li.appendChild(delButton);
    li.appendChild(span);
    todoList.appendChild(li);

    const todoObj = {
        text: text,
        id: newId
    };

    todos.push(todoObj);
    saveTodos();
    newId++;
};

handleTodoSubmit = (e) => {
    e.preventDefault();
    const value = todoInput.value;
    paintTodo(value);
    todoInput.value = "";
};

loadToDos = () => {
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos) {
        const parsedTodos = JSON.parse(toDos);
        parsedTodos.forEach((todo) => {
            paintTodo(todo.text);
        });
    }
};

initTodoList = () => {
    loadToDos();
    todoForm.addEventListener("submit", handleTodoSubmit);
};

initTodoList();

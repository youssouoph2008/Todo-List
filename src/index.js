import "./styles.css";
import "./todo.js";
const content = document.getElementById("content");

content.innerHTML = "";

const todos = []

const title = document.createElement("h1");
title.textContent = "Todo App";

const todoContainer = document.createElement("div");
todoContainer.id = "todo-container";



function addTodo(title, description, dueDate, priority) {
    const newTodo = new Todo(title, description, dueDate, priority)
    todos.push(newTodo)
    displayTodos();
}

function displayTodos() {
    todoContainer.innerHTML = ' ';

    todos.forEach((todo, index) => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo-item');
        todoDiv.innerHTML = `
            <h3>${todo.title}</h3>
            <p>${todo.description}</p>
            <p>Fecha: ${todo.dueDate.toLocaleDateString()}</p>
            <p>Prioridad: ${todo.priority}</p>
            <button onclick="completeTodo(${index})">Completar</button>
            <button onclick="deleteTodo(${index})">Eliminar</button>
        `;
        todoContainer.appendChild(todoDiv);
    });
}

function completeTodo(index){
    todos[index].completed = true;
    displayTodos();
}

function deleteTodo(index){
    todos.splice(index, 1);
    displayTodos();
}

document.getElementById("todo-form").addEventListener('submit', function(e){
    e.preventDefault();
    const title =document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = new Date(document.getElementById("dueDate").value);
    const priority = document.getElementById("priority").value;

    addTodo(title, description, dueDate, priority);

    this.reset()
})

window.completeTodo = completeTodo;
window.deleteTodo = deleteTodo;
content.appendChild(title);
content.appendChild(addBtn);
content.appendChild(todoContainer);
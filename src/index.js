import "./styles.css";
import "./todo.js";
const content = document.getElementById("content");

content.innerHTML = "";

const todos = []

const title = document.createElement("h1");
title.textContent = "Todo App";

const todoContainer = document.createElement("div");
todoContainer.id = "todo-container";

const addBtn = document.createElement("button");
addBtn.textContent = "Add Todo";

function addTodo(title, description, dueDate, priority) {
    const newTodo = new todo(title, description, dueDate, priority)
    todos.push(newTodo)
    displayTodos();
}

function displayTodos() {
    const container = document.getElementById("div");
    container.innerHTML = ' ';

    todos.forEach((todo, index ) =>{
        const todoDiv = document.createElement("div");
        todoDiv.classList.add('todo-item');
        todo
    })
}

addBtn.addEventListener("click" , () => {

    const todo = document.createElement("div");
    todo.classList.add("todo"); 

    const todoTitle = document.createElement("h3");
    todoTitle.textContent = "   Nuevo Todo";
    
    const todoDate = document.createElement("p");
    todoDate.textContent =`Fecha: ${new Date().toLocaleDateString()}`;
 
    todo.appendChild(todoTitle);
    todo.appendChild(todoDate);
    todoContainer.appendChild(todo);
})
content.appendChild(title);
content.appendChild(addBtn);
content.appendChild(todoContainer);
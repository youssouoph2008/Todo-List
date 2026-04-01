import "./styles.css";
import Todo from "./todo.js";
const content = document.getElementById("content");

const projects = [{
    name: "Default",
    todos: []
}]

let currentProject = 0;

content.innerHTML = "";


const title = document.createElement("h1");
title.textContent = "Todo App";
content.appendChild(title);

const todoContainer = document.createElement("div");
todoContainer.id = "todo-container";

loadProjects();
displayProjects();

function addTodo(title, description, dueDate, priority) {
    const newTodo = new Todo(title, description, dueDate, priority);
    projects[currentProject].todos.push(newTodo);
    saveProject();
    displayTodos();
}




function completeTodo(index){
    projects[currentProject].todos[index].completed = !projects[currentProject].todos[index].completed;
    saveProject();
    displayTodos();
}

function deleteTodo(index){
    projects[currentProject].todos.splice(index, 1);
    saveProject();
    displayTodos();
}

function saveProject(){
    localStorage.setItem("projects", JSON.stringify(projects));
}

function loadProjects(){
    const data = localStorage.getItem("projects");
    if (data) {
        const parsed = JSON.parse(data);

        parsed.forEach(project =>{
            if (!project.todos)  project.todos = []
            projects.todos.forEach(project =>{
                dueDate = new Date(todo.dueDate);
            });
        });

        projects.length = 0;
        projects.push(...parsed)
    }
}

document.getElementById("todo-form").addEventListener('submit', function(e){
    e.preventDefault();
    const title =document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = new Date(document.getElementById("dueDate").value);
    const priority = document.getElementById("priority").value;

    addTodo(title, description, dueDate, priority);

    this.reset();
})

const projectBtn = document.createElement("button");
projectBtn.textContent = "Nuevo Proyecto";

projectBtn.addEventListener("click", () => {
    const name = prompt("Nombre del proyecto:");
    if (name) {
        projects.push({name, todos: [] });
        currentProject = projects.length - 1;
        displayTodos();
    }
})

content.appendChild(projectBtn)

function displayProjects() {
    const projectList = document.createElement("div");

    projects.forEach((project, index) => {
        const btn = document.createElement("button");
        btn.textContent = project.name;

        btn.addEventListener("click", () => {
            currentProject = index;
            displayTodos();
        });
        
        projectList.appendChild(btn);
        content.appendChild(projectList)
    })
}

function displayTodos() {
    todoContainer.innerHTML = '';

    const todos = projects[currentProject].todos;

    todos.forEach((todo, index) => {
        const todoDiv = document.createElement('div');

        todoDiv.classList.add('todo-item');
        todoDiv.innerHTML = `
            <h3 style = "${todo.completed ? 'text-decoration: line-through ; color : gray;' : ''}">
            ${todo.title}
            </h3>
            <p>${todo.description}<p/>
            <p>Fecha: ${todo.dueDate.toLocaleDateString()}</p>
            <p>Prioridad: ${todo.priority}</p>
            <button onclick="completeTodo(${index})">Completar</button>
            <button onclick="deleteTodo(${index})">Eliminar</button>
        `;

        todoContainer.appendChild(todoDiv);
    
    });
}






window.completeTodo = completeTodo;
window.deleteTodo = deleteTodo;

content.appendChild(todoContainer);
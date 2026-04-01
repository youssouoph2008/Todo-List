import "./styles.css";

const content = document.getElementById("content");

content.innerHTML = "";

const title = document.createElement("h1");
title.textContent = "Todo App";

const addBtn = document.createElement("button");
addBtn.textContent = "Add Todo";

addBtn.addEventListener("click", () =>{
    console.log("El boton funciona")
})
content.appendChild(title);
content.appendChild(addBtn)
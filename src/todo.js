class Todo {
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.desciption = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

}

const miTodo = new Todo(
    "Comprar ingredientes",
    "hevos, leche, pan",
    new Date ("02 - 04 - 2026"),
    "alta"
)

console.log(miTodo) 
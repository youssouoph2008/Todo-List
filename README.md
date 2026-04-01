# Todo App

A simple web application to manage tasks (todos) organized by projects. Each task has a title, description, due date, and priority. All data is stored in the browser using localStorage.

## Features
Create multiple projects.
Add tasks to each project with a title, description, due date, and priority.
Mark tasks as completed.
Delete tasks.
Switch between projects to see their specific tasks.
Automatically save all projects and tasks in localStorage.
Simple, centered, and interactive interface.
## Technologies
HTML5
CSS3
JavaScript (ES6+)
localStorage for data persistence
JS Modules (import/export)
## Installation
Clone the repository:
git clone <REPOSITORY_URL>
Install dependencies if using a bundler like Webpack:
npm install
Start the local server:
npm start
Open the browser at:
http://localhost:8080
## Usage
Enter the project name and click "New Project" to create it.
Fill in the task form with title, description, due date, and priority.
Click "Add" to add the task to the current project.
Click Complete to mark a task as done.
Click Delete to remove a task.
Switch between projects using the project buttons to view their tasks.
## File Structure
/src
  ├─ index.js        # Main app logic
  ├─ todo.js         # Todo class
  └─ styles.css      # CSS styles
index.html           # Main page
Contributions

To improve the app:

Enhance the design with CSS or frameworks (Tailwind, Bootstrap).
Add filters by priority or completed status.
Add notifications or visual alerts.

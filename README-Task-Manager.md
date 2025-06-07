
# ✅ Task Manager Lite – Callbacks & Higher-Order Functions Project

This project was built as part of **Module 4, Lesson 10: Callbacks & Higher-Order Functions** to demonstrate how functions can be passed and used dynamically in JavaScript.

## 🎯 Project Overview

The project simulates a simple task management system using:

- ✅ A higher-order function `handleTasks()` that processes a task list
- ✅ Multiple callback functions to perform custom actions:
  - Console log TODOs
  - Format and log completed tasks
  - Dynamically render tasks into the HTML DOM

---

## 🧠 Learning Goals

- Understand and apply **callback functions**
- Write and use **higher-order functions**
- Create modular, flexible code that works with multiple behaviors
- Connect function logic to the **browser DOM**

---

## 📁 Project Structure

```
index.html      # Contains a <ul id="taskList"> for displaying tasks
script.js       # Contains all logic: task list, callbacks, and DOM logic
style.css       # Optional styling
```

---

## 🚀 Features

- Dynamically loop through a list of tasks using a reusable handler function
- Multiple output modes: plain log, formatted, or rendered as <li> elements
- Simple, clean structure for maintainable and extendable JavaScript code

---

## ✏️ Example Usage

```js
handleTasks(todoTasks);        // Logs: TODO - Clean desk, etc.
handleTasks(completedTasks);   // Logs: 📝 TASK COMPLETED: CLEAN DESK, etc.
handleTasks(displayTaskInDOM); // Renders tasks to the web page
```

---

## ✅ Technologies Used

- JavaScript (ES6+)
- DOM Manipulation (createElement, appendChild)
- Functional Programming (callbacks, HOFs)
- HTML5 (for output structure)

---

## 🔄 Bonus Ideas

- Add a form to submit new tasks
- Filter tasks by status (complete/incomplete)
- Animate list entries or highlight completed tasks
- Store tasks in localStorage

---

Created with 💪 as a callback practice project.

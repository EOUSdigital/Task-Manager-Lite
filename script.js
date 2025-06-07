//TODO 📚 Module 4 - Lesson 10.02: Callbacks and Higher-Order Functions - Challenge


//* 🎯 Project Title: “📋 Task Manager Lite”

//  Build a small system that:
//  • Stores a list of tasks
//  • Lets us pass a callback to modify how tasks are displayed
//  • Uses a higher-order function to apply a custom operation to the tasks

//? 🧱 Your Project Requirements

//  ✅ 1. Create a tasks array with at least 5 items (strings like "Clean desk", "Buy milk")

//  ✅ 2. Write a higher-order function called handleTasks(callback)
//  This function should:
//  • Accept a function as a parameter (the callback)
//  • Loop through the tasks and call the callback for each item

//  ✅ 3. Create at least two different callbacks:
//  Example:
//  • One that logs: "📝 Task: Clean desk"
//  • One that logs: "TODO - Clean desk"

//  ✅ 4. Test the system by calling handleTasks() with both callbacks

//? ✏️ Optional Bonus
//  Add a third callback that:
//  • Capitalizes all tasks
//  • Or reverses them
//  • Or adds them to a <ul> on the page (if you want to practice DOM)

//* 🧠 Goals of This Project
//  • Practice passing functions as arguments
//  • Gain comfort creating your own higher-order functions
//  • See how callbacks allow flexible, dynamic behavior

//! Solution

const tasks = ["Clean desk", "Buy milk", "Wash cloths", "Do exercises", "Repair vehicle"];

function handleTasks(callback) {
    for (let task of tasks) {
        callback(task);
    }
}

function todoTasks(task) {
    console.log(`TODO - ${task}`);
}

handleTasks(todoTasks);

function completedTasks(task) {
    console.log(`📝 Task Completed: ${task.toUpperCase()}`);
}

handleTasks(completedTasks)

// ------------------------------------------------------------

function displayTaskInDOM(task) {
    const taskList = document.getElementById("taskList");
    const listItem = document.createElement("li");
    listItem.textContent = task;
    taskList.appendChild(listItem);
}

handleTasks(displayTaskInDOM);

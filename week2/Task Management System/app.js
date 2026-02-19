import { addTask, getAllTasks, completeTask } from './task.js';
console.log(addTask("Buy Milk", "high", "2026-12-01"));
console.log(addTask("JS Practice", "medium", "2026-12-05"));
console.log("All Tasks:", getAllTasks());
const firstTaskId = getAllTasks()[0].id;
console.log(completeTask(firstTaskId));
console.log("Updated Tasks:", getAllTasks());
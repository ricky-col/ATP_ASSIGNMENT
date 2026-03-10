import { validateTitle, validatePriority, validateDueDate } from './validator.js';
const tasks=[];
export function addTask(title,priority,dueDate){
if (!validateTitle(title)) return "Error: Title must be at least 3 characters.";
  if (!validatePriority(priority)) return "Error: Invalid priority (low, medium, high).";
  if (!validateDueDate(dueDate)) return "Error: Due date cannot be in the past.";

  const newTask = {
    id: Date.now(),
    title,
    priority,
    dueDate,
    completed: false
}
tasks.push(newTask);
  return `Success: Task "${title}" added.`;
}

export function getAllTasks() {
  return tasks;
}

export function completeTask(taskId) {
  const task = tasks.find(t => t.id === taskId);
  if (task) {
    task.completed = true;
    return `Task ${taskId} marked as complete.`;
  }
  return "Task not found.";
}
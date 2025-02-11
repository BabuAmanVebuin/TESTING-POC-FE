import { Task } from "../types/taskTypes";
import { generateId } from "./idUtils";

export const createTask = (
  tasks: Task[],
  title: string,
  description: string,
  status: "completed" | "incomplete",
  priority: "high" | "low"
): Task[] => {
  const newTask: Task = {
    id: generateId(tasks),
    title,
    description,
    status, // Add status
    priority, // Add priority
    createdDate: new Date().toISOString(),
    updatedDate: new Date().toISOString(),
  };
  return [...tasks, newTask];
};

export const updateTask = (
  tasks: Task[],
  id: number,
  title: string,
  description: string,
  status: "completed" | "incomplete",
  priority: "high" | "low"
): Task[] => {
  return tasks.map((task) =>
    task.id === id
      ? { ...task, title, description, status, priority, updatedDate: new Date().toISOString() }
      : task
  );
};

export const deleteTask = (tasks: Task[], id: number): Task[] => {
  return tasks.filter((task) => task.id !== id);
};

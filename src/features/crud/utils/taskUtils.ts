import { Task } from "../types/taskTypes";

export const generateId = (tasks: Task[]): number => {
  return tasks.length ? Math.max(...tasks.map((task) => task.id)) + 1 : 1;
};

export const createTask = (
  tasks: Task[],
  title: string,
  description: string
): Task[] => {
  const newTask: Task = {
    id: generateId(tasks),
    title,
    description,
    createdDate: new Date().toISOString(),
    updatedDate: new Date().toISOString(),
  };
  return [...tasks, newTask];
};

export const updateTask = (
  tasks: Task[],
  id: number,
  title: string,
  description: string
): Task[] => {
  return tasks.map((task) =>
    task.id === id
      ? { ...task, title, description, updatedDate: new Date().toISOString() }
      : task
  );
};

export const deleteTask = (tasks: Task[], id: number): Task[] => {
  return tasks.filter((task) => task.id !== id);
};

import { Task } from "../types/taskTypes";

export const generateId = (tasks: Task[]): number => {
  return tasks.length ? Math.max(...tasks.map((task) => task.id)) + 1 : 1;
};

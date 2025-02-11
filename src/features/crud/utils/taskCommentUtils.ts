// utils/taskCommentUtils.ts
import { Task } from "../types/taskTypes";

export const addCommentToTask = (tasks: Task[], taskId: number, comment: string): Task[] => {
  return tasks.map((task) =>
    task.id === taskId
      ? { ...task, comments: [...task.comments, { id: Date.now(), text: comment }] }
      : task
  );
};

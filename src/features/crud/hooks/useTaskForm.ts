import { useState } from "react";
import { Task } from "../types/taskTypes";

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Original Task",
      description: "Original Description",
      createdDate: "2023-01-01",
      updatedDate: "2023-01-01",
    },
  ]);

  const addTask = (title: string, description: string) => {
    const newTask: Task = {
      id: tasks.length + 1,
      title,
      description,
      createdDate: new Date().toISOString(),
      updatedDate: new Date().toISOString(),
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const editTask = (id: number, title: string, description: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              title,
              description,
              updatedDate: new Date().toISOString(),
            }
          : task
      )
    );
  };

  const removeTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return { tasks, addTask, editTask, removeTask };
};

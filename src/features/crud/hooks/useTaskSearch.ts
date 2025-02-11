import { useState } from "react";
import { Task } from "../types/taskTypes";

export const useTaskSearch = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const searchTasks = (tasks: Task[]): Task[] => {
    if (!searchQuery.trim()) return tasks;

    return tasks.filter((task) => {
        console.log("task",task)
      const title = task.title?.toLowerCase() || "";
      const description = task.description?.toLowerCase() || "";

      return title.includes(searchQuery.toLowerCase()) || description.includes(searchQuery.toLowerCase());
    });
  };

  return { searchQuery, setSearchQuery, searchTasks };
};

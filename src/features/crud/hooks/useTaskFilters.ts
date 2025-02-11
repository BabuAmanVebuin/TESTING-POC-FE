import { useState } from "react";
import { Task } from "../types/taskTypes";

export const useTaskFilters = () => {
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [priorityFilter, setPriorityFilter] = useState<string | null>(null);

  const filterTasks = (tasks: Task[]): Task[] => {
    let filteredTasks = [...tasks];
    
    // Apply the status filter if set
    if (statusFilter) {
      filteredTasks = filteredTasks.filter((task) => task.status === statusFilter);
    }

    // Apply the priority filter if set
    if (priorityFilter) {
      filteredTasks = filteredTasks.filter((task) => task.priority === priorityFilter);
    }

    return filteredTasks;
  };

  return { statusFilter, setStatusFilter, priorityFilter, setPriorityFilter, filterTasks };
};

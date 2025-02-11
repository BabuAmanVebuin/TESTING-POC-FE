import { useState } from "react";
import { Task } from "../types/taskTypes";

export const useTaskState = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  return { tasks, setTasks };
};

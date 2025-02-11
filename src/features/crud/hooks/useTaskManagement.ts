// hooks/useTaskManagement.ts
import { createTask, deleteTask, updateTask } from "../utils/taskUtils";
import { useTaskState } from "./useTaskState";

export const useTaskManagement = () => {
  const { tasks, setTasks } = useTaskState();

  const addTask = (
    title: string, 
    description: string, 
    status: "completed" | "incomplete", 
    priority: "high" | "low"
  ) => {
    const newTask = createTask(tasks, title, description, status, priority);
    setTasks(newTask);
  };

  const editTask = (id: number, title: string, description: string, status: "completed" | "incomplete", priority: "high" | "low") => {
    const updatedTasks = updateTask(tasks, id, title, description, status, priority);
    setTasks(updatedTasks);
  };

  const removeTask = (id: number) => {
    const updatedTasks = deleteTask(tasks, id);
    setTasks(updatedTasks);
  };

  return { tasks, addTask, editTask, removeTask };
};

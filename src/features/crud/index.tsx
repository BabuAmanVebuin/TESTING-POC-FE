import React, { useState } from "react";
import TaskList from "./components/TaskList";
import "../../App.css";
import { useTasks } from "./hooks/useTaskForm";

const CRUDComponent: React.FC = () => {
  const { tasks, addTask, editTask, removeTask } = useTasks();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);

  const handleAddOrUpdate = () => {
    if (title && description) {
      if (editingTaskId !== null) {
        editTask(editingTaskId, title, description);
        setEditingTaskId(null); // Reset editing mode
      } else {
        addTask(title, description);
      }
      setTitle("");
      setDescription("");
    }
  };

  const handleEdit = (
    id: number,
    taskTitle: string,
    taskDescription: string
  ) => {
    setEditingTaskId(id);
    setTitle(taskTitle);
    setDescription(taskDescription);
  };

  return (
    <div className="app-container">
      <h1>Task Manager</h1>
      <div className="task-input">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <button onClick={handleAddOrUpdate}>
          {editingTaskId !== null ? "Update Task" : "Add Task"}
        </button>
      </div>
      <TaskList tasks={tasks} onEdit={handleEdit} onDelete={removeTask} />
    </div>
  );
};
export default CRUDComponent;

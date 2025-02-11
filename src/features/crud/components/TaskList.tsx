import React from "react";
import "./TaskList.css";
import { Task } from "../types/taskTypes";

interface TaskListProps {
  tasks: Task[];
  onEdit: (id: number, title: string, description: string) => void;
  onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onEdit, onDelete }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="task-item">
          <h3 data-testid={`task-id-${task.id}`}>{task.id}</h3>
          <h3 data-testid={`task-title-${task.id}`}>{task.title}</h3>
          <p data-testid={`task-description-${task.id}`}>{task.description}</p>
          <div className="task-buttons">
            <button
              className="edit-btn"
              onClick={() => onEdit(task.id, task.title, task.description)}
              data-testid={`edit-task-${task.id}`} // Corrected to use data-testid
            >
              Edit
            </button>
            <button
              className="delete-btn"
              onClick={() => onDelete(task.id)}
              data-testid={`delete-task-${task.id}`} // Corrected to use data-testid
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;

import React, { useState, useEffect } from "react";
import { useTaskManagement } from "./hooks/useTaskManagement";
import { useTaskFilters } from "./hooks/useTaskFilters";
import { useTaskSearch } from "./hooks/useTaskSearch";
import { saveTasksToLocalStorage, loadTasksFromLocalStorage } from "./utils/localStorageUtils";
import TaskList from "./components/TaskList";

const CRUDComponent: React.FC = () => {
  const { tasks, addTask, editTask, removeTask } = useTaskManagement();
  const { statusFilter, setStatusFilter, priorityFilter, setPriorityFilter, filterTasks } = useTaskFilters();
  const { searchQuery, setSearchQuery, searchTasks } = useTaskSearch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"completed" | "incomplete">("incomplete");
  const [priority, setPriority] = useState<"high" | "low">("low");

  useEffect(() => {
    const savedTasks = loadTasksFromLocalStorage();
    if (savedTasks.length > 0) {
      savedTasks.forEach((task) => {
        addTask(task.title, task.description, task.status, task.priority);
      });
    }
  }, []);

  const handleAddOrUpdate = () => {
    if (title && description) {
      addTask(title, description, status, priority);
      setTitle("");
      setDescription("");
      setStatus("incomplete");
      setPriority("low");
    }
  };   

  const filteredTasks = filterTasks(searchTasks(tasks));

  useEffect(() => {
    if (tasks.length > 0) {
      saveTasksToLocalStorage(filteredTasks);
    }
  }, [filteredTasks, tasks]);

  return (
    <div className="app-container">
      <h1>Task Manager</h1>
      <div className="task-input">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          data-testid="task-title"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          data-testid="task-description"
        />
        
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as "completed" | "incomplete")}
          data-testid="task-status-dropdown"
        >
          <option value="incomplete">Incomplete</option>
          <option value="completed">Completed</option>
        </select>
        
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as "high" | "low")}
          data-testid="task-priority"
        >
          <option value="low">Low</option>
          <option value="high">High</option>
        </select>

        <button
          onClick={handleAddOrUpdate}
          data-testid="add-task"
        >
          Add Task
        </button>
      </div>

      <div className="task-filters">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Tasks"
          data-testid="search-input"
        />
        <select
          onChange={(e) => setStatusFilter(e.target.value)}
          data-testid="filter-status"
        >
          <option value="">All Status</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
        <select
          onChange={(e) => setPriorityFilter(e.target.value)}
          data-testid="filter-priority"
        >
          <option value="">All Priorities</option>
          <option value="high">High</option>
          <option value="low">Low</option>
        </select>
      </div>

      <TaskList tasks={filteredTasks} onEdit={editTask} onDelete={removeTask} />
    </div>
  );
};

export default CRUDComponent;

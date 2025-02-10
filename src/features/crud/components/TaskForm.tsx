// import React from "react";
// import { TaskType } from "../types/taskTypes";
// import { useTaskForm } from "../hooks/useTaskForm";

// interface TaskFormProps {
//   taskToUpdate?: TaskType;
// }

// const TaskForm: React.FC<TaskFormProps> = ({ taskToUpdate }) => {
//   const { title, setTitle, description, setDescription, id, handleSubmit } =
//     useTaskForm(taskToUpdate);

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Task Title"
//         required
//       />
//       <textarea
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         placeholder="Task Description"
//         required
//       />
//       <button type="submit">{id ? "Update Task" : "Add Task"}</button>
//     </form>
//   );
// };

// export default TaskForm;

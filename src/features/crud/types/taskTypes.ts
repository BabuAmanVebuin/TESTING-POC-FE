// types/taskTypes.ts
export interface Task {
  id: number;
  title: string;
  description: string;
  createdDate: string;
  updatedDate: string;
  status: "completed" | "incomplete";
  priority: "high" | "low"; 
}

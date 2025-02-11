// useUndoRedo.ts
import { useState } from "react";

export const useUndoRedo = () => {
  const [history, setHistory] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  const addHistory = (newState: any) => {
    const newHistory = [...history.slice(0, currentIndex + 1), newState];
    setHistory(newHistory);
    setCurrentIndex(newHistory.length - 1);
  };

  const undo = () => {
    if (currentIndex <= 0) return;
    setCurrentIndex(currentIndex - 1);
  };

  const redo = () => {
    if (currentIndex >= history.length - 1) return;
    setCurrentIndex(currentIndex + 1);
  };

  const getCurrentState = () => {
    return history[currentIndex] || {};
  };

  return { addHistory, undo, redo, getCurrentState };
};

// src/context/TaskContext.tsx
import { createContext, useContext, ReactNode } from 'react';

type Task = string;

interface TaskContextType {
  Task: Task;
}

const TaskContext = createContext<TaskContextType | undefined>({} as TaskContextType);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  return (
    <TaskContext.Provider value={{ Task : "a" }}>
      {children}
    </TaskContext.Provider>
  );
};

// Hook para uso mais simples
export const useTask = (): TaskContextType => {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTask deve ser usado dentro de TaskProvider');
  return context;
};

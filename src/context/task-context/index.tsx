import { createContext, useContext, ReactNode, useReducer } from 'react';
import { initialState, taskReducer, type Task } from './task-reducer';

interface TaskContextType {
  tasks: Task[],
  add: (title: string) => void,
  remove: (id: string) => void
}

const TaskContext = createContext<TaskContextType | undefined>({} as TaskContextType);

export function TaskProvider ({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  function add(title: string) {
    dispatch({
      type: 'add',
      payload: {
        id: Date.now().toString(),
        title,
        completed: false
      }
    })
  }

  function remove(id: string) {
    dispatch({
      type: 'remove',
      payload: {
        id
      }
    })
  }

  return (
    <TaskContext.Provider value={{ 
        tasks: state.tasks,
        add,
        remove
    }}>
      {children}
    </TaskContext.Provider>
  );
};

export function useTask  (): TaskContextType {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTask deve ser usado dentro de TaskProvider');
  return context;
};

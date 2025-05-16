import { createContext, useContext, ReactNode, useReducer, useState, useEffect } from 'react';
import { initialState, taskReducer, type Task } from './task-reducer';

type Status = "all" | "active" | "completed";

interface TaskContextType {
  tasks: Task[],
  add: (title: string) => void,
  remove: (id: string) => void,
  update: (id: string, completed: boolean) => void,
  status: Status,
  changeStatus: (status: Status) => void
}



const TaskContext = createContext<TaskContextType>({} as TaskContextType);

export function TaskProvider ({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<Status>("all")
  const [state, dispatch] = useReducer(taskReducer, initialState);

  function setTasksLocalStorage(tasks: Task[]) {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }

  useEffect(() => {
    setTasksLocalStorage(state.tasks)
  }, [state.tasks])

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

  function update(id: string, completed: boolean) {
    dispatch({
      type: 'update',
      payload: {
        id,
        completed
      }
    })
  }

  function changeStatus(status: Status) {
    setStatus(status)
  }

  return (
    <TaskContext.Provider value={{ 
        tasks: state.tasks,
        add,
        remove,
        update,
        status,
        changeStatus
    }}>
      {children}
    </TaskContext.Provider>
  );
};

export function useTask  (): TaskContextType {
  const context = useContext(TaskContext);
  return context;
};

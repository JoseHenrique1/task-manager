export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TaskState {
  tasks: Task[]
}

interface TaskActionAdd {
  type: "add",
  payload: Task
};

interface TaskActionRemove {
  type: "remove",
  payload: {
    id: string
  }
};

interface TaskActionUpdateCompleted {
  type: "update",
  payload: {
    id: string,
    completed: boolean
  }
};

type TaskAction = TaskActionAdd | TaskActionRemove | TaskActionUpdateCompleted

export const initialState: TaskState = {
  tasks: [
    {
      id: "1",
      title: "Task 1",
      completed: false
    },
    {
      id: "2",
      title: "Task 2",
      completed: false
    },
    {
      id: "3",
      title: "Task 3",
      completed: false
    }
  ],
}

export function taskReducer(state: TaskState, action: TaskAction) {
  switch (action.type) {
    case "add":
      return {
        tasks: [...state.tasks, action.payload]
      }

    case "remove":
      return {
        tasks: state.tasks.filter(task => task.id !== action.payload.id)
      }

    case "update":
      const { id, completed } = action.payload;
      return {
        tasks: state.tasks.map(task => task.id === id ? { ...task, completed } : task)
      }
      
    default:
      return state
  }
}
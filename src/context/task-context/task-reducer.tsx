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

const tasks: Task[] = JSON.parse(localStorage.getItem("tasks") ?? "[]")
export const initialState: TaskState = {
  tasks
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
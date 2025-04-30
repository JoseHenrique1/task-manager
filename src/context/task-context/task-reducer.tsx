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

type TaskAction = TaskActionAdd | TaskActionRemove

export const initialState: TaskState = {
  tasks: [],
}

export function taskReducer(state: TaskState, action: TaskAction){
  switch(action.type){
    case "add":
      return {
        tasks: [...state.tasks, action.payload]
      }
    case "remove":
      return {
        tasks: state.tasks.filter(task => task.id !== action.payload.id)
      }
    default:
      return state
  }
}
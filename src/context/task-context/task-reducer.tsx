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
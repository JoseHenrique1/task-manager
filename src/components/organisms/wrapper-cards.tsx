import { useTask } from "@/context/task-context"
import { TaskCard } from "../molecules/task-card"

export function WrapperCards() {
  const {tasks, status} = useTask();

  const tasksFiltered = tasks.filter((task) => {
    if(status === "active") return !task.completed;
    if(status === "completed") return task.completed;
    return true
  })

  return (
    <div className="p-4 space-y-1">
      {tasksFiltered.map((task) => (
        <TaskCard key={task.id} {...task} />
      ))}
    </div>

  )
}

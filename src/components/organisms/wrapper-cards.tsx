import { useTask } from "@/context/task-context"
import { TaskCard } from "../molecules/task-card"

export function WrapperCards() {
  const {tasks} = useTask();
  return (
    <div className="p-4 space-y-1">
      {tasks.map((task) => (
        <TaskCard key={task.id} {...task} />
      ))}
    </div>

  )
}

import { useTask } from "@/context/task-context"
import { TaskCard } from "../molecules/task-card"
import { useCallback } from "react";

export function WrapperCards() {
  const {tasks, status, remove, update} = useTask();

  const tasksFiltered = tasks.filter((task) => {
    if(status === "active") return !task.completed;
    if(status === "completed") return task.completed;
    return true
  })

  const handleRemoveTask = useCallback((id: string) => {
    remove(id)
  }, [remove])

  const handleUpdateTask = useCallback((id: string, completed: boolean) => {
    update(id, !completed)
  }, [update])

  return (
    <div className="p-4 space-y-1">
      {tasksFiltered.map((task) => (
        <TaskCard 
          key={task.id} 
          {...task} 
          handleRemove={() => handleRemoveTask(task.id)} 
          handleUpdate={() => handleUpdateTask(task.id, task.completed)} />
      ))}
    </div>

  )
}

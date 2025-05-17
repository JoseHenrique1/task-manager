import { useTask } from "@/context/task-context"
import { TaskCard } from "../molecules/task-card"
import { useCallback, useMemo } from "react";
import { Badge } from "../ui/badge";

export function WrapperCards() {
  const {tasks, status, remove, update} = useTask();

  const amountTasksCompleted = useMemo(() => tasks.filter((task) => task.completed).length, [tasks]);
  const amountTasksActive = useMemo(() => tasks.filter((task) => !task.completed).length, [tasks]);

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
    <div className="p-4">
      <div className="pb-2 space-x-2">
        <Badge className="bg-blue-700">Tasks completed {amountTasksCompleted}</Badge>
        <Badge className="bg-orange-600">Tasks active {amountTasksActive}</Badge>
      </div>
      <div className="space-y-1">
      {tasksFiltered.map((task) => (
        <TaskCard 
          key={task.id} 
          {...task} 
          handleRemove={() => handleRemoveTask(task.id)} 
          handleUpdate={() => handleUpdateTask(task.id, task.completed)} />
      ))}
    </div>
    </div>

  )
}

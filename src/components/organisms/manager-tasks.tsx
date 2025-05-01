import { Filter } from "../molecules/filter"
import { TaskForm } from "../molecules/task-form"

export function ManagerTasks() {
  return (
    <div className="flex flex-wrap gap-2 px-4 py-0 sm:justify-between">
      <TaskForm />
      <Filter />
    </div>
  )
}

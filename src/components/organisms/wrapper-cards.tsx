import { TaskCard } from "../molecules/task-card"
export function WrapperCards() {
  const a = [1,2,3]
  return (
    <div className="p-4 space-y-1">
      {a.map((_, index) => (
        <TaskCard key={index} />
      ))}
    </div>

  )
}

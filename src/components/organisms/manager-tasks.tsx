import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Plus } from "lucide-react"
import { Filter } from "../molecules/filter"

export function ManagerTasks() {
  return (
    <div className="flex gap-2 px-4 py-0">
      <Input placeholder="Search task" className="text-sm placeholder:text-sm" />
      <Filter />
      <Button><Plus /></Button>
    </div>
  )
}

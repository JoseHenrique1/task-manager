import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useTask } from "@/context/task-context";

type Status = "all" | "active" | "completed";

export function Filter() {
  const {status, changeStatus} = useTask()
  return (
    <Select value={status} onValueChange={(value) =>changeStatus(value as Status)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select state" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>States</SelectLabel>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

import { Switch } from "../ui/switch";
import { ButtonTrash } from "../atoms/button-trash";

export function TaskCard() {
  return (
    <div className="flex justify-between ">
      <p>Task</p>
      <div className="space-x-2">
        <Switch/>
        <ButtonTrash />
      </div>
    </div>
  )
}

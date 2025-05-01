import { Switch } from "../ui/switch";
import { ButtonTrash } from "../atoms/button-trash";
import { useTask } from "@/context/task-context";

interface props {
  title: string,
  completed: boolean,
  id: string
}
export function TaskCard({ title, completed, id }: props) {
  
  const { remove, update } = useTask();

  function handleRemove() {
    remove(id)
  }

  function handleUpdate() {
    update(id, !completed)
  }

  return (
    <div className="flex justify-between ">
      <p>{title}</p>
      <div className="space-x-2">
        <Switch checked={completed} onCheckedChange={handleUpdate}/>
        <ButtonTrash onClick={handleRemove}/>
      </div>
    </div>
  )
}

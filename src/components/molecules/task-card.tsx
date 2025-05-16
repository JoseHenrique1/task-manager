import { Switch } from "../ui/switch";
import { ButtonTrash } from "../atoms/button-trash";

interface props {
  title: string,
  completed: boolean,
  id: string,
  handleRemove: () => void,
  handleUpdate: () => void
}
export function TaskCard({ title, completed, handleRemove, handleUpdate }: props) {
  

  return (
    <div className="flex justify-between card">
      <p>{title}</p>
      <div className="space-x-2">
        <Switch checked={completed} onCheckedChange={handleUpdate}/>
        <ButtonTrash onClick={handleRemove}/>
      </div>
    </div>
  )
}

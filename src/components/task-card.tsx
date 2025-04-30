import { Trash } from "lucide-react";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";

export function TaskCard() {
  return (
    <div className="flex justify-between ">
      <p>Task</p>
      <div className="space-x-2">
        <Switch />
        <Button><Trash /></Button>
      </div>
    </div>
  )
}

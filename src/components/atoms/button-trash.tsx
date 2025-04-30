import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";

export  function ButtonTrash() {
  return (
    <Button className="bg-red-500"><Trash2 strokeWidth={2.5} size={20} /></Button>
  )
}

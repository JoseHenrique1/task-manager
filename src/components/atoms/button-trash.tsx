import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { ComponentProps } from "react";

export  function ButtonTrash(props: ComponentProps<"button">) {
  return (
    <Button 
      className="bg-red-500"
      {...props}>
        <Trash2 
          strokeWidth={2.5} 
          size={20} />
    </Button>
  )
}

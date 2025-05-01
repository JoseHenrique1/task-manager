import { Input } from "../ui/input"
import { FormEvent } from "react"
import { useTask } from "@/context/task-context"
import { ButtonAdd } from "../atoms/button-add"

export function TaskForm() {
  const { add } = useTask()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const title = formData.get("title") as string;
    add(title)
    event.currentTarget.reset()
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex w-full sm:w-auto">
      <Input
        name="title"
        placeholder="New task"
        className="rounded-r-none text-sm placeholder:text-sm" />
      <ButtonAdd />
    </form>
  )
}

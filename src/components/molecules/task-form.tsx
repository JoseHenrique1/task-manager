import { Input } from "../ui/input"
import { FormEvent, useEffect } from "react"
import { useTask } from "@/context/task-context"
import { ButtonAdd } from "../atoms/button-add"
import { useRef } from "react"

export function TaskForm() {
  const inputRef = useRef<HTMLInputElement>(null)
  const { add } = useTask()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const title = formData.get("title") as string;
    title.trim() !== "" && add(title)
    event.currentTarget.reset()
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [inputRef])

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex w-full sm:w-auto">
      <Input
        ref={inputRef}
        name="title"
        placeholder="New task"
        className="rounded-r-none text-sm placeholder:text-sm" />
      <ButtonAdd />
    </form>
  )
}

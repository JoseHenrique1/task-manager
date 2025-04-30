import { Plus } from "lucide-react"
import { Filter } from "./components/filter"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Header } from "./components/header"
import { TaskCard } from "./components/task-card"

function App() {
  const a = [1,2,3]
  return (
    <div>
      <Header />
      <main>
        <div className="flex gap-2 px-4 py-0">
          <Input placeholder="Search task" />
          <Filter />
          <Button><Plus /></Button>
        </div>

        <div className="p-4 space-y-1">
          {a.map((_, index) => (
            <TaskCard key={index} />
          ))}
          
        </div>
      </main>
    </div>
  )
}

export default App

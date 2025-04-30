import { Filter } from "./components/filter"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"

function App() {
  return (
    <div>
      <header>TASK MANAGER</header>
      <main>
        <Input placeholder="Serach task" />
        <Filter />

        <div>
          <div>task01</div>
          <div>task01</div>
          <div>task01</div>
          <div>task01</div>
        </div>
      </main>
      <Button>hahahah</Button>
    </div>
  )
}

export default App

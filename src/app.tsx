import { Header } from "./components/atoms/header"
import { WrapperCards } from "./components/organisms/wrapper-cards"
import { ManagerTasks } from "./components/organisms/manager-tasks"

function App() {
  return (
    <div>
      <Header />
      <main>
        <ManagerTasks />
        <WrapperCards />
      </main>
    </div>
  )
}

export default App

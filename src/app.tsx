import { Header } from "./components/atoms/header"
import { WrapperCards } from "./components/organisms/wrapper-cards"
import { ManagerTasks } from "./components/organisms/manager-tasks"
import { TaskProvider } from "./context/task-context";
function App() {
  return (
    <TaskProvider>
      <div className="max-w-3xl mx-auto">
        <Header />
        <main>
          <ManagerTasks />
          <WrapperCards />
        </main>
      </div>
    </TaskProvider>
  )
}

export default App

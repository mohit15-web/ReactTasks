
import { BrowserRouter as Router , Routes, Route } from "react-router-dom"
import TaskFour from "./components/TaskFour"
import FetchTask from "./components/FetchTask"
import { ExampleNavbarTwo } from "./components/Navbar"
import TaskThree from "./components/TaskThree"
import TaskTwo from "./components/TaskTwo"
import TaskOne from "./components/TaskOne"

function App() {
  
  return (
    <div>
      <ExampleNavbarTwo/>
      <Router>
      <Routes>
        <Route path="/" element={<TaskOne/>}/>
        <Route path="/task2" element={<TaskTwo/>}/>
        <Route path="/task4" element={<TaskFour/>}/>
        <Route path="/task3" element={<TaskThree/>}/>
        <Route path="/fetchTask" element={<FetchTask/>}/>
      </Routes>
      </Router>
    </div>
  )
}

export default App
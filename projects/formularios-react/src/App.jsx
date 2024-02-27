import { useState } from "react"
import Controlado from "./components/Formulario.jsx"
import Todos from "./components/Todos.jsx"

const initialStateTodos =[
  {
    id: 1,
    title: "Todo #001",
    description: "Descripcion #001",
    state: true,
    priority: true
  },
  {
    id: 2,
    title: "Todo #002",
    description: "Descripcion #002",
    state: true,
    priority: true
  },
  {
    id: 3,
    title: "Todo #003",
    description: "Descripcion #003",
    state: true,
    priority: false
  },
]

function App() {

  const [toDo, setToDo] =useState(initialStateTodos)

  const addTodo = todo =>{
    setToDo([...toDo, todo])
  }

  return (
    <div className="container mb-2">
      <br />
      <h1 className="my-5">Formulario Controlados</h1>
      <Controlado addTodo={addTodo}/>
      <Todos todos={toDo}/>
    </div>
  )
}

export default App

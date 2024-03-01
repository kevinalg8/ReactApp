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
    priority: false
  },
  {
    id: 3,
    title: "Todo #003",
    description: "Descripcion #003",
    state: true,
    priority: true
  },
]

function App() {

  const [toDo, setToDo] =useState(initialStateTodos)

  const addTodo = todo =>{
    setToDo([...toDo, todo])
  }

  const deleteTodo = id =>{
    const newArray = toDo.filter(todo => todo.id !== id)
    setToDo(newArray)
  }

  const updateTodo = id =>{
    const newArray = toDo.map((todo) =>{
      if (todo.id === id) {
        todo.state = !todo.state
        
      }
      return todo
    })
    setToDo(newArray)
  }

  const orderTodo = arrayTodos =>{
    return arrayTodos.sort((a, b)=>{
      if(a.priority === b.priority) return 0
      if(a.priority) return -1
      if(!a.priority) return 0
    })
  }


  return (
    <div className="container mb-2">
      <br />
      <h1 className="my-5">Formulario Controlados</h1>
      <Controlado addTodo={addTodo}/>
      <Todos todos={orderTodo(toDo)} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
    </div>
  )
}

export default App

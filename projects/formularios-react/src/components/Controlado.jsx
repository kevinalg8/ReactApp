import { useState } from "react"

const Controlado = () => {

    const [todo,setTodo] = useState({
        title: "To Do 1",
        description: "Description #001",
        state: "pendiente"
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(todo.title, todo.description, todo.state);
    }

    return (
        <form onSubmit={handleSubmit} >
            <input type="text" placeholder="Ingrese To Do" className="form-control mb-2" name="title" value={todo.title} onChange={(e) => setTodo({...todo, title: e.target.value})}/>
            <textarea className="form-control mb-2" placeholder="Ingrese Descripcion" name="description" value={todo.description} onChange={(e) => setTodo(e.target.value)}/>
            <select className="form-select mb-2" name="state" value={todo.state} onChange={(e) => setTodo(e.target.value)}>
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button type="submit" className="btn btn-success">Procesar</button>
        </form>
    )
}

export default Controlado

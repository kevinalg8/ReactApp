import { useState } from "react"
import Swal from "sweetalert2"

const Formulario = ({addTodo}) => {

    const [todo,setTodo] = useState({
        title: "To Do #001",
        description: "Description #001",
        state: "pendiente",
        priority: true
    })

    const { title, description, state, priority } = todo

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!title.trim() || !description.trim()) {
            //setError('Llena los campos')
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Titulo y Descripcion obligatorios",
              })
    }
    addTodo({
        id: Date.now(),
        ...todo,
        state: state === "completado"
    })
    
    Swal.fire({
        icon: "success",
        title: "To Do Agregado Correctamente",
        showConfirmButton: false,
        timer: 1500
      });

}

    const handleChange = (e) =>{
        const {name, value, type, checked} = e.target
        setTodo({
            ...todo,
            [name]: type === 'checkbox' ? checked : value
        })

    }

    return (
        <form onSubmit={handleSubmit} >
            <input type="text" placeholder="Ingrese To Do" className="form-control mb-2" name="title" value={title} onChange={handleChange}/>
            <textarea className="form-control mb-2" placeholder="Ingrese Descripcion" name="description" value={description} onChange={handleChange}/>
            <div className="form-check mb-2">
            <input type="checkbox" name="priority" className="form-check-input" id="inputCheck" checked={priority} onChange={handleChange}/>
            <label htmlFor="inputCheck">Dar prioridad</label>
            </div>
            <select className="form-select mb-2" name="state" value={state} onChange={handleChange}>
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button type="submit" className="btn btn-success">Agregar To Do </button>
        </form>
    )
}

export default Formulario

import { useRef } from "react";

const NoControlado = () => { 

    const form = useRef(null)

    const handleSubmit = (e) => { 
        e.preventDefault()

        //Capturar datos
        const data = new FormData(form.current)
        const {title, description, state} = Object.fromEntries([...data.entries()])

        console.log(title, description, state);

        //Validacion de datos
        //Con trim hacemos que si mandan un espacio vacio este no lo valide
        if (!title.trim() && description === "") {
            console.log("llena los campos");
            
        }
     }

    return(
        <form onSubmit={handleSubmit} ref={form}>
            <input type="text" placeholder="Ingrese To Do" className="form-control mb-2" name="title" defaultValue="Tarea #001"/>
            <textarea className="form-control mb-2" placeholder="Ingrese Descripcion" name="description"/>
            <select className="form-select mb-2" name="state">
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button type="submit" className="btn btn-success">Procesar</button>
        </form>
    )
}

export default NoControlado
    
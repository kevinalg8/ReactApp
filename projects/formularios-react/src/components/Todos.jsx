import Todo from "./ToDo.jsx"

const todo = ({ todos, deleteTodo, updateTodo }) => {
    return (
        <div>
            <h2 className="my-3 text-center">To do</h2>
            <ul>
                {
                    todos.map(todo => (
                        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
                    ))
                }
                {
                    todos.length === 0 && <li className="list-group-item text-center">No hay To Do's</li>
                }
            </ul>
        </div>

    )
}
export default todo
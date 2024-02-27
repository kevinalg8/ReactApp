const todo = ({ todos }) => {
    return (
        <div>
            <h2 className="my-3 text-center">To do</h2>
            <ul>
                {
                    todos.map(todo => (
                        <li key={todo.id}>{todo.title}</li>
                    ))
                }
            </ul>
        </div>

    )
}
export default todo
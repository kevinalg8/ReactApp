const Button = ({ text }) => {

    const handeClickButton = (title) => { 
        console.log('hande click ' +title);
     }
    return <button onClick={() => { handeClickButton(text) }}>{text}</button>

}

const WelcomeText = ({ user }) => (user ? <h3>Online</h3> : <h3>Offline</h3>)

const ItemFrut = ({ frut }) => (
    <li>
        {frut}
    </li>
)

const App = () => {
    const title = "Titulo hecho desde "
    const user = true

    const fruts = ["🍏", "🍌", "🍑", "🍇"]

    return (
        <>
            <h1>{title}React</h1>
            <img src="https://picsum.photos/200" alt="" />
            <Button text="Registro" />
            <Button text="Inicio de sesion" />
            <Button text="Salir" />

            <WelcomeText user={user} />

            <ul>
                {
                    fruts.map((frut, index) => (
                        <ItemFrut key={index} frut={frut} />
                    ))
                }
            </ul>
        </>
    )
}

export default App
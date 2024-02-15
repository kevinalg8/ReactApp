//Componentes
import Button from "./components/Button.jsx"
import WelcomeText from "./components/WelcomeText.jsx"  
import ListFruts from "./components/fruts/ListFruits.jsx"
import ButtonState from "./components/ButtonState.jsx"

const App = () => {
    const title = "Titulo hecho desde "
    const user = false
    
    return (
        <>
            <ButtonState/>
            <h1>{title}React</h1>
            <img src="https://picsum.photos/200" alt="" />
            <Button text="Registro" />
            <Button text="Inicio de sesion" />
            <Button text="Salir" />

            <WelcomeText user={user} />
            <ListFruts/>
        </>
    )
}

export default App
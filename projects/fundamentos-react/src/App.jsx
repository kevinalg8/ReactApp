const Button = (props) =>{
    return(
        <button>{props.text}</button>
    )
}

const OnlineText = ()=>{
    return(
        <div>
            <h3>Online</h3>
        </div>
    )
}

const OfflineText = ()=>{
    return(
        <div>
            <h3>Offline</h3>
        </div>
    )
}

const App = () =>{
    const title = "Titulo hecho desde "
    const user = true

    const fruts =["🍏","🍌","🍑","🍇"]

    return (
        <>
        <h1>{title}React</h1>
        <img src="https://picsum.photos/200" alt="" />
        <Button text="boton-1"/>
        <Button text="boton-2"/>
        <Button text="boton-3"/>
        {
            user ? <OnlineText/> : <OfflineText/>
        }
        <ul>
            {
                fruts.map((frut, index)=>(
                    <li key={index}>{frut}</li>
                ))
            }
        </ul>
        </>
    )
}

export default App
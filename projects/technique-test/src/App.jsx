import { useEffect, useState } from "react"

const CAT_ENDPOINT_RANDOM_FACT ='https://catfact.ninja/fact'

export function App() {
    const [fact, setFact ] = useState('lorem ipsum cat fact')

    useEffect(()=>{
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res=> res.json())
        .then(data=>{
            const { fact } = data
            setFact(fact)

            /*
            Crear un arrar dividiendo el texto por lo espacion luego
            decimos que escoja no la primer posicion sino de la primera
            a la 3 posicion y lo unimos de nuevo con el join en un string
            */
           
            const threeFirtsWords = fact.split(' ').slice(0,3).join(' ')
            console.log(threeFirtsWords);
            //API de imagenes random de michis
            fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
            .then(res=>res.json())
            .then(response=>{
                console.log(response);
            })
        })
    },[])

    return(
        <main>
            <h2>Hola esta es mi primer prueba con React</h2>
            {fact &&<p>{fact}</p>}
        </main>
    )
    
}
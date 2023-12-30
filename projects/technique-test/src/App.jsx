import { useEffect, useState } from "react";
import './css/styles.css'

const CAT_ENDPOINT_RANDOM_FACT ='https://catfact.ninja/fact';
const CAT_PREFIX_IMAGE_URL ='https://cataas.com';

export function App() {

    const [fact, setFact ] = useState()
    const [imageUrl, setImageUrl] = useState()

    //Datasos de los michis (Efectos)
    useEffect(()=>{
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res=> res.json())
        .then(data=>{
            const { fact } = data
            setFact( fact )
            /*
            Crear un arrar dividiendo el texto por lo espacion luego
            decimos que escoja no la primer posicion sino de la primera
            a la 3 posicion y lo unimos de nuevo con el join en un string
            */
        })
    },[])

    //Recuperar imagen esta es dependiente de los datos de los gatos
    useEffect(()=> {
        if (!fact) return
        const threeFirtsWords = fact.split(' ', 3).join(' ')
        console.log(threeFirtsWords)

        //API de imagenes random de michis
        //https://cataas.com/cat/says/${threeFirtsWords}?fontSize=50&fontColor=red
        fetch(`https://cataas.com/cat/says/${threeFirtsWords}?fontSize=50&fontColor=red`)
        .then(res=>res.json())
        .then(response=>{
            const { url } = response
            setImageUrl(url)
        })
    },[fact])

    return(
        <main>
            <h2>API michis</h2>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first three words for ${fact}`}/>}
        </main>
    )
    
}
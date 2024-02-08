import '../styles/app.css'
import { TwitterFollowCard } from './TwitterFollowCard'
import { useState } from 'react'

/*
Cuando pasamos un boolean con solo poner isFollowing react lo tomara como un true 
pero si queremos que sea false le pasamos un isFollowing={false} es decir le decimos
que esta vez si es falso
*/

export function App() {
    const [userName,setUserName ,name, setName]=useState('xxxtentacion')
    /*
    Podemos pasar una funcion como parametro es decir un crear una funcion la cual tiene como parametro
    en este caso la del TwitterFollowCard 
    */
    return (
        <>
        <section className='App'>
            <TwitterFollowCard userName="Lilpeep" name="GOTH ANGEL SINGER" />
            <TwitterFollowCard userName="PostMalone" name="Post Malone" />
            <TwitterFollowCard userName={name} name={userName} />
        <button onClick={()=> setName('PostMalone')}>
        cambio de nombre
        </button>
        <button onClick={()=> setUserName('Post Malone')}>
        cambio de usuario
        </button>
        </section>
        </>
    )
}

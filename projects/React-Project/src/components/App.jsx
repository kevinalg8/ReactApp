import '../styles/app.css'
import { TwitterFollowCard } from './TwitterFollowCard'


/*
Cuando pasamos un boolean con solo poner isFollowing react lo tomara como un true 
pero si queremos que sea false le pasamos un isFollowing={false} es decir le decimos
que esta vez si es falso
*/

export function App() {
    /*
    Podemos pasar una funcion como parametro es decir un crear una funcion la cual tiene como parametro
    en este caso la del TwitterFollowCard 
    */
    return (
        <>
            <TwitterFollowCard userName="Lilpeep" name="GOTH ANGEL SINGER" />
            <TwitterFollowCard userName="PostMalone" name="Post Malone" />
            <TwitterFollowCard userName="TrvisXX" name="TRAVIS SCOTT" />
        </>
    )
}

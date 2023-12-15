//Se llaman Hooks permiten añadir funcionalidad a los componentes es decir la reactividad
import { useState } from 'react'

//Todo lo que esta dentro del return son elementos 
export function TwitterFollowCard({ userName, name}) {
    const [isFollowing, setIsFollowing] = useState(false)



    const text = isFollowing ? 'siguiendo' : 'seguir'
    const bottonClassName = isFollowing 
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }

    //En la linea 10 estamos evaluando dicho elemento y a su vez renderizo
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img alt="Avatar" src={`https://unavatar.io/Twitter/${userName}`} className='tw-followCard-avatar' />
                <div className='tw-followCard-info'>
                    <strong className='tw-followCard-infoUserName'>{name}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={bottonClassName} onClick={handleClick}>{text}</button>
            </aside>
        </article>
    )
}
/*
Un componente es una factoria de elementos es decir es una funcion que al ejecutarla devuelve un elemento
y el elemento es lo que factoriza
LOS COMPONENTES CREAN ELEMENTOS Y LOS ELEMENTOS SON LOS QUE SE RENDERIZAN
*/
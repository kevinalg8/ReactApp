//Todo lo que esta dentro del return son elementos 

export function TwitterFollowCard({userName, name, isFollowing}) {
    console.log(isFollowing);

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
                <button className='tw-followCard-button'>Seguir</button>
            </aside>
        </article>
    )
}
/*
Un componente es una factoria de elementos es decir es una funcion que al ejecutarla devuelve un elemento
y el elemento es lo que factoriza
LOS COMPONENTES CREAN ELEMENTOS Y LOS ELEMENTOS SON LOS QUE SE RENDERIZAN
*/
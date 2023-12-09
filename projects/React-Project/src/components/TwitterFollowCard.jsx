export function TwitterFollowCard({userName, name, isFollowing}) {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img alt="Avatar" src={`https://unavatar.io/Twitter/${userName}`} className='tw-followCard-avatar' />
                <div className='tw-followCard-info'>
                    <strong className='tw-followCard-infoUserName'>{name}</strong>
                    <span>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>Seguir</button>
            </aside>
        </article>
    )
}
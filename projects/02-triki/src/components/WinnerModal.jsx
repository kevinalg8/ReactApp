import { Square } from "./Square.jsx"

export function WinnerModal ({winner, newGame}) {
    if (winner === null) return null

    const winnerText = winner === false ? 'Empate' : 'Gano:'

    return (
        <section className='winner'>
            <div className='text'>
                <h2>
                    {winnerText}
                </h2>
                <header>

                    {winner && <Square>{winner}</Square>}

                </header>
                <footer>
                    <button onClick={newGame}>
                        Empezar de nuevo
                    </button>
                </footer>
            </div>
        </section>
    )
}
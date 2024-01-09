//import { useState } from 'react'
import { useState } from 'react'
import './styles/index.css'

const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}


const WINNER_COMBO = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]



function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
  )
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)//Null es que no hay ganador y false es que hay empate
  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBO) {
      const [a, b, c] = combo
      if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
        return boardToCheck[a]
      }
    }
    return null
  }

  const newGame=()=>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const updateBoard = (index) => {
    //No actualizamos las posiciones si ya existen posiciones en la tabla
    if (board[index] || winner) return

    //Aqui actualizamos el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    //cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    }
  }


  return (
    <main className='board'>
      <h1>Triki</h1>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>


      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>

      </section>
      {
        winner != null && (
          <section className='winner'>
            <div className='text'>
              <h2>
                {
                  winner=== false
                  ? 'empate'
                  : 'Gano:' + winner
                }
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
    </main>
  )
}
//Dentro de la clase board es donde estamos renderizando el tablero

export default App

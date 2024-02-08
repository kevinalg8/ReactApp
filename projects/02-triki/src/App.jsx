import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square.jsx'
import { TURNS } from './Const.js'
import { checkWinnerFrom, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import './styles/index.css'


function App() {
  const [board, setBoard] = useState(()=>{
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(()=>{
    const turnFromStorage = window.localStorage.getItem('turn')
    return(turnFromStorage) ?? TURNS.X
  })
  const [winner, setWinner] = useState(null)//Null es que no hay ganador y false es que hay empate

  //Volver al estado original del tablero
  const newGame=()=>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board', 'turn')
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
    //Guardar partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    }if (checkEndGame(newBoard)) {
      setWinner(false)
      
    }
  }
  return (
    <main className='board'>
      <h1>Triki</h1>
      <button onClick={newGame}>
        Empezar de nuevo
      </button>
      <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>


      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>

      </section>
      <WinnerModal newGame={newGame} winner={winner}/>
    </main>
  )
}
//Dentro de la clase board es donde estamos renderizando el tablero

export default App

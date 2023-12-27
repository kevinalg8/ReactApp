  import { useState } from 'react'
import './styles/index.css'
  
  const turns = {
    x: 'X',
    O: 'O'
  }

  
  const Square = ({children, updateBoard, i}) =>{
    return(
      <div className="square">
        {children}
      </div>
    )
  }
  
  function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  return (
    <main className='board'>
      <h1>Triki</h1>
      <section className="game">
        {
          board.map((_, i) =>{
            return(
              <Square key={i} i={i}>
                {i}
              </Square>
            )
          })
        }

      </section>
    </main>
  )
}

export default App

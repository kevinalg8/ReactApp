import { useState, useEffect } from 'react'
import './index.css'

let url = `https://pokeapi.co/api/v2/pokemon/804`

export default function App() {
  const [pokemon, setDataPokemon] = useState(null)

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setDataPokemon(data)
        console.log(data.types[0].type.name);
      })
  }, [])

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Poke API</h1>
      <section className='container'>
        <div>
          {pokemon && <p>{pokemon.name}</p>}
          {pokemon && (<img src={pokemon.sprites.front_default} />)}
          {pokemon && <p>Tipo de pokemon: <strong>{pokemon.types[0].type.name}</strong></p>}
        </div>
      </section>
    </>
  )
}

//{pokemon.forEach((poke, index) =><p key={index}>{poke}</p>)}
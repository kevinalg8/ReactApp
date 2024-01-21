import { useState, useEffect } from 'react'
import './index.css'


let number = Math.ceil(Math.random() * 1000)
let url = `https://pokeapi.co/api/v2/pokemon/${number}`

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

/*
{pokemon.map && <p>Tipo de pokemon: <strong>{pokemon.types[0].type.name}</strong></p>}
*/

// {pokemon.map((poke, index)=><p key={index}>{poke.name}</p>)}
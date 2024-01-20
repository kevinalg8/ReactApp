import { useState, useEffect } from 'react'
import './index.css'

let url = 'https://pokeapi.co/api/v2/pokemon/'

export default function App() {
  const [pokemon, setDataPokemon]=useState([])
  //const [pokemonImage, setDataPokemonImage]=useState([])


  //Es un estado que depende del otro sin ID no hay foto del pokemon
  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(data =>{
      setDataPokemon(data.results)
      console.log(data.results);
    })
  },[])

  return (
    <>
      <h1 style={{textAlign:'center'}}>Poke API</h1>
      <section className='container'>
      {pokemon.map((poke, index)=><p key={index}>{poke.name}</p>)}

      </section>
    </>
  )
}

//{pokemon.forEach((poke, index) =><p key={index}>{poke}</p>)}
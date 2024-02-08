fetch('https://pokeapi.co/api/v2/pokemon/')
 .then(res=>res.json())
 .then(data =>{
    //console.log(data.results)

    data.results.forEach(elements =>{
      //console.log(elements.name);
    })
 })

 //Async Await

 const getPokemons = async() =>{
   try {
      const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/')
      const data = await respuesta.json()
      //Filter solo funciona para filtrar por X condicion 
      const pokeName = data.results.filter(poke => poke.name !=='bulbasaur');
      console.log(pokeName)
   }  catch (error) {
     console.log(error)
   }
 }
getPokemons()
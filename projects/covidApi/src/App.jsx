import { useEffect, useState } from 'react'
import HeartBrokenSharpIcon from '@mui/icons-material/HeartBrokenSharp';
import '../src/css/index.css'

const urlApi = 'https://api.covidtracking.com/v1/us/daily.json'

export default function App() {
  const [data, setData]=useState()

  useEffect(()=>{
    fetch(urlApi)
    .then(res=> res.json())
    .then(data=>{
      setData(data[0])
    })
  },[])
  
  return (
    <section className='dad'>
      <HeartBrokenSharpIcon sx={{fontSize:60}}>
      <h1>Covid API</h1>
      </HeartBrokenSharpIcon>
      {data && <p className='deaths'>los muertos son: {data.death}</p>}
      {data && <p className='hospitalized'>los hospitalizados son: {data.hospitalized}</p>}
    </section>
  )
}


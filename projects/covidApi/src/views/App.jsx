import { useEffect, useState } from 'react'
import HeartBrokenSharpIcon from '@mui/icons-material/HeartBrokenSharp';
import '../css/index.css'

//Api de covid-19
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
      <div>
      <HeartBrokenSharpIcon sx={{fontSize:90}}>
      <h1>Covid API</h1>
      </HeartBrokenSharpIcon>
      {data && <p className='deaths'>los muertos son: <strong>{data.death}</strong></p>}
      {data && <p className='hospitalized'>los hospitalizados son: <strong>{data.hospitalized}</strong></p>}
      </div>
    </section>
  )
}


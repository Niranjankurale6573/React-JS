import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [jokes, setJokes] = useState([])
  let CheckEffect;
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((res)=>{
      // Axios Handle JSON formate give data so it is not require to conver data in json formate.
      setJokes(res.data)
    })
    .catch((err)=>{
      console.log("Error:",err)
    })
    .finally(()=>{
      CheckEffect='Finally Code is Running'
    })
  },[])

  return (
    <>
    <h1>Hello World</h1>
    <p>{jokes.length}</p>  
    {jokes.map((joke)=>(
        <div key={joke.id}>
          <h3>{joke.name}</h3>
          <h4>{joke.description}</h4>
        </div>
    ))}
    <p>{CheckEffect}</p>
    </>
  )
}

export default App

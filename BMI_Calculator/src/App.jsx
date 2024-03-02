import { useState } from 'react'
import './App.css'
import BMI from './Component/BMI'
import Header from './Component/Header'
import Footer from './Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <BMI/>
      <Footer/>
    </>
  )
}

export default App

import { useState,useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './Context/Theme'
import ThemeBtn from './Component/ThemeBtn'
import Card from './Component/Card'

function App() {
  const [themeMode, setThemeMode] = useState('light')
  const [bodyColor,setBodyColor]=useState(themeMode)

  const lightTheme=()=>{setThemeMode('light'),setBodyColor('light')}
  const darkTheme=()=>{setThemeMode('dark'),setBodyColor('dark')}

  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  useEffect(()=>{
    bodyColor=='dark'?document.querySelector('body').style.backgroundColor='black'
    :document.querySelector('body').style.backgroundColor='white';
  },[bodyColor])

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
     <div className="flex justify-center min-h-screen items-center ">
          <div className="w-96">
              <div className="w-full max-w-sm mx-auto flex justify-center mb-4">
                <ThemeBtn/>
              </div>
              <div className="w-full max-w-sm mx-auto">
              </div>
              <Card/>
          </div>
      </div>
    </ThemeProvider>
  )
}


export default App

import { useState,useCallback,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const[numAllow,setNumAllow]=useState(false)
  const[charAllow,setCharAllow]=useState(false)
  const[Password,setPassword]=useState("")
//UseRef Hook
const passRef=useRef(null)

//useCallback Hook
  const PasswordGenerate=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllow){
      str +="1234567890"
    }
    if(charAllow){
      str +="!@#$%^&*_-/\|,."
    }
    for (let i = 1; i <=length; i++) {
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
      setPassword(pass)

  },[length,numAllow,charAllow,setPassword])

  //for using code password
  const CopyPass=useCallback(()=>{
    passRef.current?.select
    window.navigator.clipboard.writeText(Password)
  },[Password])
  
//for using call back hook run
    useEffect(()=>{
    PasswordGenerate()
  },[length,numAllow,charAllow,PasswordGenerate])

  return (
    <>
      <div className='bg-slate-900 text-white p-10 w-auto grid-flow-col-dense rounded-2xl'>
        <h2>Password Generator</h2>

        <div className='w-auto d-content inline-flex m-3'>

          <input className='bg-slate-700 text-white border-s rounded-md w-80 h-15  text-center' type='text' readOnly value={Password} ref={passRef}></input>
          <button onClick={CopyPass}>Copy</button>

        </div>

        <div className='w-auto d-content m-3  '>
          <input type='range' min={6} max={27} value={length} className='cursor-pointer m-2' onChange={(e)=>{setLength(e.target.value)}}/>
          <label className='m-2'>Length : {length}</label>
        </div>

        <div className='w-auto d-content m-3'>
          <input type='checkbox' className='m-2' 
                  defaultChecked={numAllow} id='numberInput'
                   onChange={()=>{setNumAllow((prev)=>!prev)}}>
                    </input><label>Number</label>

          <input type='checkbox' className='m-2'
                   defaultChecked={charAllow}
                   onChange={()=>{setCharAllow((prev)=>!prev)}}>
                    </input><label>Characters</label>
        </div>
      </div>
    </>
  )
}

export default App

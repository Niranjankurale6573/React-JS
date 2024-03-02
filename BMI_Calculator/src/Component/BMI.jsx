import { useState,useEffect } from 'react'

function BMI() {

    const[height,setHeight]=useState('0')
    const[weight,setWeight]=useState('0')
    let[showValue,setValue]=useState('')
    
    const clickEvt=(e)=>{
         e.preventDefault()
         setValue((weight/(height*height/10000)).toFixed(2))
        }
 
  return (
        <div className='flex justify-center m-10'>        
        <div className="flex font-sans rounded-3xl w-auto h-auto" >
          <div className="flex-none w-56 h-80 relative ">
            <img src="https://gymgeek.com/wp-content/uploads/2023/12/BMI.png" alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          </div>

          <form className="flex-auto p-6">
              <div className="flex flex-wrap">
                <h1 className="flex-auto  text-lg font-semibold text-slate-900 text-center font-bold">
                  BMI Calculator
                </h1>
              </div>
            <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
              <input type='number' onChange={(e)=>{setHeight(e.target.value)}} className='border-s-2 w-full text-center' placeholder='Enter Height cm'/>
            </div>
              <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                <input type='number' onChange={(e)=>{setWeight(e.target.value)}} className='border-s-2 w-full text-center' placeholder='Enter Weight cm'/>
              </div>
              <div className="flex space-x-4 mb-6 text-sm font-medium">
                <div className="flex-auto flex space-x-4 justify-center">
                  <button onClick={clickEvt} className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                    Check It..!
                  </button>
                </div>
              </div>
                <h2 className="text-sm text-slate-700 text-center font-bold">Result: {showValue}</h2>
          </form>
        </div>
        </div>
  )
}

export default BMI
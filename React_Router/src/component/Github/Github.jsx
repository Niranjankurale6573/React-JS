import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import{useLoaderData} from 'react-router-dom'

function Github() {

    const data=useLoaderData()

    //Call API through techniq

    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((res)=> res.json())
    //     .then((data)=> {
    //             console.log(data) 
    //             setData(data)
    //         })
    //  }, [data,setData])

  return (
    <div className='bg-gray-600 p-8 text-white text-center'>
          <img className='inline-block rounded-full' src={data.avatar_url}alt='Git Picture' width={200}/>
            <label className='flex justify-center'>Github Followers: {data.followers}</label>
            <label className='flex justify-center'>Name: {data.name}</label>
            <label className='flex justify-center'>{data.bio}</label>
    </div>
  )
}


export default Github

//Call Api through optimized technique
export const gitHubInfo=async()=>{
    const res= await fetch('https://api.github.com/users/hiteshchoudhary')
    return res.json()
}
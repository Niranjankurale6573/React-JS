import React from 'react'
import {useParams} from 'react-router-dom'


 function User() {
    const {userid}=useParams()


  return (
    <div className='bg-slate-700 p-4 text-gray-300 flex justify-center'>
        User: {userid}
    </div>
  )
}
export default User

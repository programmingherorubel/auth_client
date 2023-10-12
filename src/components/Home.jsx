import React, { useEffect, useState } from 'react'

function Home() {
  const [user,setUser]=useState(null)

  useEffect(()=>{
   if(localStorage.getItem('userToken')){
    setUser(localStorage.getItem('userToken'))
   }else{
    setUser(null)
   }
  
  },[user,setUser])


  return (
    <div className='h-[80vh] flex justify-center items-center'>
        <h1 className='text-2xl'>This Is {user ? 'user' : 'Home'} </h1>
    </div>
  )
}

export default Home
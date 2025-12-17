import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

const Profile = () => {
    const [status,setStatus]=useState("")
    const getProfile=async()=>{
        let result=await fetch("http://localhost:8000/me",{
        credentials:"include",       
      })
      let newData=await result.json()
      if(newData.message) setStatus(newData)
     
    }
    console.log(status)
    
    useEffect(()=>{
        getProfile()
    },[] )
   
   
    return <h1>{status?.user?.name} {status?.user?.email}</h1>

    // Edit and update
}

export default Profile
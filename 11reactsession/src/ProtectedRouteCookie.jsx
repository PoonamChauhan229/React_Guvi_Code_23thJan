import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
const ProtectedRouteCookie = ({children}) => {
    
    const [status,setStatus]=useState(null)
    const [loading,setLoading]=useState(true)
    const verifyUser=async()=>{
     try{
           let result=await fetch("http://localhost:8000/verify",{
            credentials:"include",       
        })
        let newData=await result.json()
        console.log("newData",newData)
        //  setStatus(true)
        if (newData.token){ 
            console.log("test123")
            setStatus(true)
        } else{
            setStatus(false)
        }
    }catch(e){
             setStatus(false)
     }finally{
        setLoading(false)
     }
    }
    useEffect(()=>{
        verifyUser()
    },[] )
    console.log(loading,status)
    if(loading) return <p>Loading.... & Testing....</p>
    return status ?children :<Navigate to ='/'/>
}


export default ProtectedRouteCookie
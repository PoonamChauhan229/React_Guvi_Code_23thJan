import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
     const navigate=useNavigate()
  return (
    <>
     <button
          onClick={()=>{
          navigate('/signin')
          }}
          >Signin</button>
    
                <button
          onClick={()=>{
          navigate('/signup')
          }}
          >Register</button>
    
            <button
          onClick={()=>{
          navigate('/dashboard')
          }}
          >Dashboard</button>
        </>

  )
}

export default HomePage

import React from 'react'

import { AddBlog } from "./AddBlog";
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
 const navigate=useNavigate()
  return (
    <div>
        <button
    onClick={()=>{
      localStorage.clear()
      sessionStorage.clear()
      navigate('/')
    }}
    >Logout</button>

    <button onClick={()=>{navigate('/addblog')}}>
    Add Blog
    </button> 

    <button onClick={()=>{navigate('/profile')}}>
    Profile
    </button>      

    </div>
  )
}

export default Dashboard
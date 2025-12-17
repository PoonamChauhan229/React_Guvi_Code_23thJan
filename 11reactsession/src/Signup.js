import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
   const navigate=useNavigate()
  
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    //   const [username, setUsername] = useState("");
    //   const [phone, setPhone] = useState("");
    //   const [role, setRole] = useState("user");

      const [formData,setFormData]=useState({
        username:"",
        password:"",
        phone:"",
        email:"",
        role:"User",
      })
      console.log(formData)
      const handleChange=(e)=>{
        // console.log(e.target.value,e.target.name)
        const {name,value}=e.target

        // if(name=="username") setUsername(value)
        // else if(name=="phone")setPhone(value)
        // else if(name=="email")setEmail(value)
        // else if(name=="password")setPassword(value)
        // else if(name=="role")setRole(value) 
      
          // dot(fixed) ,[]
      setFormData((prev)=>(
        {...prev,[name]:value}
      ))
      }

      const handleSubmit=(e)=>{
        e.preventDefault()
        // single usState
      //   const formField={
      //   email,password,username,phone,role
      // }
      //  console.log(formField) 
      // if (!formData.phone) {
      //   delete formData.phone;
      // }

      // if (!formData.email) {
      //   delete formData.email;
      // }
       
      //  console.log(formData)


      navigate('/signin')
      }
  return (
    <>
    <h1>Signup</h1>
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Username' value={formData.username} name="username"
      onChange={handleChange}
      /> <br/><br/>
      <input type='password'placeholder='password' value={formData.password} name="password"
      onChange={handleChange}
      /> <br/><br/>
      <input type='email'placeholder='Email' value={formData.email} name="email"
      onChange={handleChange}
      /> <br/><br/>
      <input type='text'placeholder='Phone' value={formData.phone} name="phone" 
      onChange={handleChange}
      /> <br/><br/>
{/* options >> select tag */}
      <select name="role" id="role" 
      onChange={handleChange} value={formData.role} >
        <option value="" disabled>Select Role</option>
        <option value="user">User</option>
        <option value="admin">admin</option>
        <option value="guest">Guest</option>
      </select>
    <br/><br/>
      <input type="submit" value="Submit"/>
    </form>
    
    </>
  )
}

export default Signup
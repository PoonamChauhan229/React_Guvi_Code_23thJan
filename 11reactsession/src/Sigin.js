import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Sigin() {
  const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); //
    const formData = {
      email,
      password,
    };
    console.log(formData);
      signinUser(formData)
  };
  // POST Call >> server call
  const signinUser=async(formData)=>{
    console.log("Trying to Sigin...",formData)
    // Backend >> API Endpoints 
    // JsonPlaceholder
    // string format >> not at all use 
    // fetch >>GET >>URL >> Retrival >>see and use >> convert intojson 
    // https://jsonplaceholder.typicode.com/todos
    // async ops 
    // let res=await fetch("https://68f248c9b36f9750deec19c8.mockapi.io/news/news")
    // // json() >> string
    // let data=await res.json()
    // console.log(data)

    // POST >> URL ,{METHOD:,headers:{contenttype},body} // body >> req.body >> string >>JSON.stringfy()
    // see and view >> no need to store 
      let result=await fetch("http://localhost:8000/signin",{
    //  let result=await fetch("https://68f248c9b36f9750deec19c8.mockapi.io/news/news",{  // http://localhost:3000/ >> mockapi (cors handle)
      // cors >> same origin >> different origin >> throw error 
        method:"POST",
        credentials:"include",// specically cookies >>> store and send to server
        headers:{
          "Content-Type":"application/json",         
        },
        body:JSON.stringify(formData)
      })
      let newData=await result.json()
      // console.log(newData)
      // console.log(newData.token)
      if(newData.token){
        localStorage.setItem("token",newData.token)
        sessionStorage.setItem("token",newData.token)
        localStorage.setItem("myCat", "Tom");
        navigate('/dashboard')
      }
      
    // axios
  }
  // signinUser()
  // useEffect(()=>{
  //     signinUser()
  // },[])
  return (
<>
<h1>SignIn</h1>
    <form className="App" onSubmit={handleSubmit}>
      <input
        type="password"
        name=""
        id=""
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="email"
        name=""
        id=""
        onChange={(e) => setEmail(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
</>
  );
}

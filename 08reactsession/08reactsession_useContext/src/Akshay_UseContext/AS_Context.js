
import { useContext, useState } from "react";
import { List } from "./List";
import UserContext from "./utils/UserContext";
import ModeContext from "./utils/ModeContext";



export default function AS_Context() {
  const[user,setUser]=useState({
    name:"Shivam",
    email:"shivam@gmail.com"
  })
  const [light,dark,DarkBtn]= useContext(ModeContext);
    const styles = {
      background: DarkBtn === "Dark 🌙" ? "pink" : "black"
    };
  return (
    <UserContext.Provider value={user}>
      <div className="App" style={styles}>
        {/* <input value={user.name} onChange={(e)=>{
          setUser({name:e.target.value,
          email:"shivam@gmail.com"
          })
        }}/> */}

        {/* Next */}
        <input value={user.name} onChange={(e)=>{
          setUser({...user,name:e.target.value
          })
        }}/>

<input value={user.email} onChange={(e)=>{
          setUser({...user, email:e.target.value
          })
        }}/>
        <List />
      </div>
       </UserContext.Provider>
  );
}



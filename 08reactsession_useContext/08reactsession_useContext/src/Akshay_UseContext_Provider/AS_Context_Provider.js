
import { useState } from "react";
import { List } from "./List";
import UserContext from "./utils/UserContext";
import ModeContext from "./utils/ModeContext";



// Reference - https://codesandbox.io/s/elastic-panini-fupyn9?file=/src/App.js:1203-1309
// Expected output - https://csb-6qf0y.netlify.app/

// 1. Creating - createContext - ✅
// 2. Publisher - provider - context.Provider - ✅
// 3. Subscriber - useContext - useContext(context)

export default function AS_Context_Provider() {
  const[user,setUser]=useState({
    name:"Shivam",
    email:"shivam@gmail.com"
  })

  const [theme,setTheme]=useState({
    light:"light",
    dark:"dark",
    DarkBtn:"Dark 🌙",
    status:true
  })
  
console.log(theme)
    const styles = {
      background: theme.status === true ? "pink" : "black"
    };
  return (
    // We are modifying the Context
    <UserContext.Provider value={user}>
      <ModeContext.Provider value={[theme,setTheme]}>
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
      </ModeContext.Provider>
       </UserContext.Provider>
  );
}



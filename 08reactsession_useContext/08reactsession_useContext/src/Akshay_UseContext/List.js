import React from "react";
import { ListItem } from "./ListItem";
import { useContext } from "react";
import UserContext from "./utils/UserContext";


// List, ListItem - free from props
export const List = () =>{
const {name,email}=useContext(UserContext)
console.log(name,email)
return(
<ul>
    <h1>{name} and {email}</h1>
    <ListItem/>
  </ul>
);
}

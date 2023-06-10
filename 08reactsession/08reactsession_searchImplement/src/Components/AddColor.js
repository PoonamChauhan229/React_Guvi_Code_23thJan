import React, { useState } from 'react'
import { ColorBox } from './ColorBox'
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

const AddColor = () => {
 
  const [colorVal,setcolorVal]=useState("red")

  const [colorList,setcolorList]=useState([colorVal])
  console.log(colorList)

   return (


    <>

<Box sx={{ width: "50%", marginLeft:"25%",marginRight:"25%",border:"1px solid blue"}}>
        <TextField
          sx={{
            width: "70%",
            backgroundColor:colorVal
          }}
          id="outlined-basic"
          variant="outlined"
          value={colorVal}
          onChange={(e)=>{
            setcolorVal(e.target.value)
          }}
        />
          <Button
          sx={{
            width: "28%",
            marginLeft:"2%",
            padding:"2%"
          }}
            variant="contained"
            onClick={()=>{
              setcolorList([...colorList,colorVal])
              console.log(colorList)}}>
            Add Color
          </Button>
 
      {
        colorList.map((element, index)=>{
          return <ColorBox color={element}/>
        })
      }
       </Box>
    </>
  )
}

export default AddColor
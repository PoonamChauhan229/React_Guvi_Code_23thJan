import React, { useState } from 'react'
import { ColorBox } from './ColorBox'

const AddColor = () => {
 
  const [colorVal,setcolorVal]=useState("red")

  const [colorList,setcolorList]=useState([colorVal])
  console.log(colorList)

  const inputStyle={
    backgroundColor:colorVal
  }
  return (
    <div>
      <input type="text" name="" id="" 
      value={colorVal}
      onChange={(e)=>{
        setcolorVal(e.target.value)
      }}
      style={inputStyle}
      />
      <button onClick={()=>{
        setcolorList([...colorList,colorVal])
        console.log(colorList)
      }}>AddColor</button>
      {/* {
        colorList.map((element,index)=>{
          return <div style={{backgroundColor:element,height:"30px",width:"50px"}}></div>
        })
      } */}

      {
        colorList.map((element, index)=>{
          return <ColorBox color={element}/>
        })
      }
    </div>
  )
}

export default AddColor
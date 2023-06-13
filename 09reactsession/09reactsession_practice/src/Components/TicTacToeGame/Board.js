import React, { useState } from 'react'
import Gamebox from './Gamebox'

const Board = ({boardVal,setBoardVal}) => {
     // set 2 players

  const [isXturn,setIsXturn]=useState(true)

//   Updating or showing x and o value in browser
    const handleClick=(index)=>{
        console.log(index)
        const boardValCopy=[...boardVal]
        if(boardValCopy[index]==null){
        boardValCopy[index]=isXturn?"X":"O"
        setBoardVal(boardValCopy)
        setIsXturn(!isXturn)
        }
    }

// Decide the winner

const decideWinner=(boardVal)=>{
    // Possibility of winning
    const listItems=[
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]
    for(let i=0;i<listItems.length;i++){
        const [a,b,c]=listItems[i]
        if(boardVal[a]!==null && boardVal[a]==boardVal[b] &&boardVal[b]==boardVal[c]){
            console.log("winner")
            return boardVal[a]
        }

    }
    return null;
}
const winner=decideWinner(boardVal)
  return (
    <div className='board'>
        {/* Array().fill */}
       {/* {boardVal.fill(<Gamebox/>)} */}

       {
        boardVal.map((element,index)=>{
            return <Gamebox  element={element}
             playerClick={()=>handleClick(index)}   
            />
        })
       }
       <h2>Winner is {winner}</h2>
    </div>
  )
}

export default Board
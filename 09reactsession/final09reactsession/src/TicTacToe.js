import './App.css';
import { useState } from 'react';


const TicTacToe=()=>{
    const [board,setBoard]=useState([
        null,null,null,
        null,null,null,
        null,null,null,
    ])
    const [isXturn,setisXturn]=useState(true)
    
    const handleClick=(index)=>{
        console.log(index)
        const boardCopy=[...board]
        if(winner==null &&boardCopy[index]==null){
        boardCopy[index]=isXturn?"X":"O"
        setBoard(boardCopy)
        setisXturn(!isXturn) 
        }
    }  
const decideWinner=(board)=>{
    const listItems=[
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]
    for(let i=0;i<listItems.length;i++){
        const[a,b,c]=listItems[i];
        if(board[a]!==null && board[a]===board[b] && board[b]===board[c] ){
            console.log("Winner",board[a])
            console.log(board)
            return board[a]
        }
    }
    return null;
}
const winner=decideWinner(board)
return(
    <>
    <div className='board'>
       {
        board.map((element,index)=>{
            return <GameBox val={element} playerClick={()=>handleClick(index)}/>
        })
       }
      
    </div>
     <h2>Winner is {winner}</h2>
     </>
)
}

const GameBox=({val,playerClick})=>{
    // const[val,setVal]=useState('')
    const valStyles={
        color :(val==="X")?"green":"navy"
    }
    return(
        <>
          <div className="gamebox" style={valStyles}
          onClick={()=>{
            // setVal(val==="X"?"O":"X")
            playerClick()
        }}
          >
           {val}
          </div>
        </>
    )
    }
export default TicTacToe
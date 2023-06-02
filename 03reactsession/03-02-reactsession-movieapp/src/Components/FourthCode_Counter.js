import React, { useState } from 'react'

const FourthCode_Counter = () => {
// let like=10;
// let disLike=100;
// Now shall we call it below ? using template literals
// Now we do it Javascript
// We do this by using an eventListener , which eventListener 
// onClick
// Let do it

const [like,setLike]=useState(0)
const [disLike,setDislike]=useState(0)
// setLike has to be called to update the state of like variable
// when we call setLike(), we are informing the react that we are updating the state 
// And wherever the like value is there, it will update the Like value
  return (
    <span className='counterContainer'>
        <button 
        className='likeButton'
        onClick={()=>{
            // like++;
            // console.log(like)

            //  if we do this, in the console there is an change but not on the view part 
            // What going on here?
            // Its not changing
            // So now what?
            setLike(like+1)
        }}>👍 {like}</button>
        <button 
         className='dislikeButton'
        onClick={()=>setDislike(disLike+1)}>👎{disLike}</button>
    </span>
  )
}

export default FourthCode_Counter

// We have to call this component Now,
// But where we should call it?
// We will be calling it inside the Second_Message and Third Message Component.

// So now , if you see everywhere we are able to get the buttons.
// if we want to increase like count what we shall do
// coming

import React from 'react'

const Gamebox = ({element,playerClick}) => {
  return (
    <div className='gamebox'
    onClick={()=>playerClick()}
    >
        {element}</div>
  )
}

export default Gamebox
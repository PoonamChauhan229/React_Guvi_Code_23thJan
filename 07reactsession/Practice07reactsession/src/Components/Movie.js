import React, { useState } from 'react'
import Counter from './Counter'
import '../App.css'
import { useNavigate } from 'react-router-dom'

const Movie = ({name,poster,rating,summary,id}) => {
  // console.log(name,poster,rating,summary)// typing

  const navigate=useNavigate();


  const styles={
    // Conditional Styling
   color: rating>8?"green":"red"
  }
  // Toggle Summary 1st way

  const [show,setShow]=useState(true)

  // const toggleSummary={
  //   display:show?"block":'none'
  // }
  return (
     <div className='movieContainer '>
      <img src={poster}alt="" className="moviePoster" />
      {/* needs side by side so wrap it in a div */}
      <div className='movieSpecs'>
          <h4 className="movieName">{name}
          <button onClick={()=>setShow(!show)}>{show?"🔽":"🔼"}</button>
          <button onClick={()=>{navigate(`/movies/${id}`)}}>ℹ</button>
      <Counter/>
          </h4>
          <h4 className="movieRating" style={styles}>⭐{rating}</h4>
      </div>
      {/* Toggle Summary Task */}
      {/* <button onClick={()=>setShow(!show)}>{show?"🔽":"🔼"}</button> */}
      {show && <p className="movieSummary" 
      // style={toggleSummary}
      >{summary}</p>}
    </div>
  )
}

export default Movie;

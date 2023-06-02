import React from 'react'

const Movie = ({name,poster,rating,summary}) => {
  console.log(name,poster,rating,summary)
  const styles={
    // Conditional Styling
   color: rating>8?"green":"red"
  }
  return (
    <div className='movieContainer'>
      <img src={poster}alt="" className="moviePoster" />
      {/* needs side by side so wrap it in a div */}
      <div className='movieSpecs'>
          <h4 className="movieName">{name}</h4>
          <h4 className="movieRating" style={styles}>⭐{rating}</h4>
      </div>
      {/* Toggle Summary Task */}
      <button>🔽</button>
      <p className="movieSummary">{summary}</p>
    </div>
  )
}

export default Movie;

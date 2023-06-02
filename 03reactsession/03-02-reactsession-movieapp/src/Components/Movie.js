import React from 'react'

const Movie = ({name,poster,rating,summary}) => {
  console.log(name,poster,rating,summary)
  return (
    <div className='movieContainer'>
      <img src={poster}alt="" className="moviePoster" />
      {/* needs side by side so wrap it in a div */}
      <div className='movieSpecs'>
          <h4 className="movieName">{name}</h4>
          <h4 className="movieRating">⭐{rating}</h4>
      </div>
      <p className="movieSummary">{summary}</p>
    </div>
  )
}

export default Movie;

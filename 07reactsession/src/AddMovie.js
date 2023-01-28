import { useState } from 'react';


export const AddMovie = ({movieList,setMovieList}) => {
  
  const [movieName, setMovieName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  
  return(  
    <>






    
      <div className="input-group mb-3 container-fluid w-25 mt-2">
        <span className="input-group-text">Movie Name</span>
        <input type="text" className="form-control" value={movieName}
          onChange={(e) => {
            setMovieName(e.target.value);
          }} />
      </div>

      <div className="input-group mb-3 container-fluid w-25 mt-2">
        <span className="input-group-text">Poster</span>
        <input type="text" className="form-control" value={poster}
          onChange={(e) => {
            setPoster(e.target.value);
          }} />
      </div>

      <div className="input-group mb-3 container-fluid w-25 mt-2">
        <span className="input-group-text">Rating</span>
        <input type="text" className="form-control" value={rating}
          onChange={(e) => {
            setRating(e.target.value);
          }} />
      </div>

      <div className="input-group mb-3 container-fluid w-25 mt-2">
        <span className="input-group-text">Summary</span>
        <input type="text" className="form-control" value={summary}
          onChange={(e) => {
            setSummary(e.target.value);
          }} />
      </div>

      <div className="d-grid gap-2 col-2 mx-auto">
        <button className="btn btn-primary" type="button"
          onClick={() => {
            const movie={ name:movieName, poster, rating, summary }
            setMovieList([...movieList,movie]);  
            console.log(movieList)          
          }}
        >Add Movie</button>
        
      </div>  
    </>
  );
};



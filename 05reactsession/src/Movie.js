import { useState } from 'react';
import Counter from './Counter';


 const Movie = ({ name, poster, summary, rating }) => {
  const myStyle={
    width:"400px",
    height:"100%",    
  }
  const [show, setShow] = useState(false);
  const ratingStyle = {
    color: rating > 8 ? "green" : "crimson",
    fontWeight: "bold"
  };

  return (

    <div className="col" style={myStyle}>
      <div className="card">
        <img src={poster} className="card-img-top" alt="..." style={{ height: "450px" }} />
        <div>
          <div className="card-body m-0 p-0 d-flex justify-content-around">
            <span className="card-title m-0 p-0"><b>{name}</b></span>
            <span className="m-0 p-0" style={ratingStyle}>⭐{rating}</span>
          </div>
          <div style={{ textAlign: "center", marginBottom: "15px" }}>
            <Counter />

            <span
              style={{ paddingLeft: "10px", fontSize: "21px" }}
              onClick={() => {
                setShow(!show);
              }}>{show ? '🔽' : '🔼'}</span>
          </div>
        </div>
        <div className="card-footer" style={{ height: "150%" }}>
          {show && <p className="card-text">{summary}</p>}
        </div>
      </div>
    </div>

  );
};
export default Movie;
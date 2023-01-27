import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Counter from './Counter';


 const Movie = ({ name, poster, summary, rating,id }) => {
  const myStyle={
    width:"400px",
    height:"100%",
    marginTop:"20px"    
  }
  console.log(name)
  const [show, setShow] = useState(false);
  const ratingStyle = {
    color: rating > 8 ? "green" : "crimson",
    fontWeight: "bold",
    
  };

  const Navigate=useNavigate()

  return (

    <div className="col" style={myStyle}>
      <div className="card" style={{width:"280px"}}>
        <img src={poster} className="card-img-top" alt="..." style={{ height: "350px" }} />
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
              }}>{show ? '🔽' : '🔼'}
            </span>

            <span
              style={{ paddingLeft: "10px", fontSize: "21px" }}
              onClick={() => {
                Navigate(`/movies/${id}`)
                console.log("hi")
              }}>✅
            </span>
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
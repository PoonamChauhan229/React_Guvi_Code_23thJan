import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

export const AddMovie = () => {
  const [movieName, setMovieName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const Navigate=useNavigate()
  const textStyles = {
    marginBottom: "15px",
  };

  const addMovie=()=>{
    const movie = { name: movieName, poster, rating, summary,trailer };
    fetch('https://63e4b3c5c04baebbcdaa0ebb.mockapi.io/movies',{
      method:"POST",
      body:JSON.stringify(movie),
      headers:{
        "Content-Type":"application/json"
      }
    }).then(()=>Navigate('/'))
    console.log(movie)
    
  }
  return (
    <div
      style={{
        margin: "auto",
        width: "40%",
        padding: "10px",
        // border: "1px solid red",
      }}
    >
      <div style={textStyles}>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Movie Name"
          variant="outlined"
          value={movieName}
          onChange={(e) => {
            setMovieName(e.target.value);
          }}
        />
      </div>
      <div style={textStyles}>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Poster"
          variant="outlined"
          value={poster}
          onChange={(e) => {
            setPoster(e.target.value);
          }}
        />
      </div>
      <div style={textStyles}>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Rating"
          variant="outlined"
          value={rating}
          onChange={(e) => {
            setRating(e.target.value);
          }}
        />
      </div>
      <div style={textStyles}>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Summary"
          variant="outlined"
          value={summary}
          onChange={(e) => {
            setSummary(e.target.value);
          }}
        />
         </div>
        <div style={textStyles}>
        <TextField
          sx={{ width: "100%" }}
          id="outlined-basic"
          label="Trailer URL"
          variant="outlined"
          value={trailer}
          onChange={(e) => {
            setTrailer(e.target.value);
          }}
        />       
      </div>
      <div style={{ margin: "auto", width: "50%",display:"flex" }}>
        <Button
          sx={{ width: "100%", fontSize: "18px" }}
          variant="outlined"
          onClick={() => addMovie()}
        >
          Add Movie
        </Button>

        <Button
          sx={{ width: "100%", fontSize: "18px",marginLeft:"15px" }}
          variant="outlined"
          color="secondary"
          onClick={() => {
          Navigate('/')
          }}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

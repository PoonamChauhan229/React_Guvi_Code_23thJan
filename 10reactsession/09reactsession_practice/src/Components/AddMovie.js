import { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

export const AddMovie = ({ movieList, setMovieList }) => {
  const [movieName, setMovieName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const Navigate = useNavigate();
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <TextField
          sx={{
            width: "50%",
            marginLeft: "25%",
            marginRight: "25%",
            marginTop: "5%",
            marginBottom: "2%",
          }}
          id="outlined-basic"
          label="MovieName"
          variant="outlined"
          value={movieName}
          onChange={(e) => {
            setMovieName(e.target.value);
          }}
        />

        <TextField
          sx={{
            width: "50%",
            marginLeft: "25%",
            marginRight: "25%",
            marginBottom: "2%",
          }}
          id="outlined-basic"
          label="Poster"
          variant="outlined"
          value={poster}
          onChange={(e) => {
            setPoster(e.target.value);
          }}
        />

        <TextField
          sx={{
            width: "50%",
            marginLeft: "25%",
            marginRight: "25%",
            marginBottom: "2%",
          }}
          id="outlined-basic"
          label="Raing"
          variant="outlined"
          value={rating}
          onChange={(e) => {
            setRating(e.target.value);
          }}
        />

        <TextField
          sx={{
            width: "50%",
            marginLeft: "25%",
            marginRight: "25%",
            marginBottom: "2%",
          }}
          id="outlined-basic"
          label="Summary"
          variant="outlined"
          value={summary}
          onChange={(e) => {
            setSummary(e.target.value);
          }}
        />

<TextField
          sx={{
            width: "50%",
            marginLeft: "25%",
            marginRight: "25%",
            marginBottom: "2%",
          }}
          id="outlined-basic"
          label="Trailer"
          variant="outlined"
          value={trailer}
          onChange={(e) => {
            setTrailer(e.target.value);
          }}
        />

        <Stack spacing={2} direction="row">
          <Button
          sx={{
            width: "10%",
            marginLeft: "38%",
          }}
            variant="contained"
            onClick={() => {
              const movie = { name: movieName, poster, rating, summary,trailer };
              setMovieList([...movieList, movie]);
              console.log(movieList);
            }}
          >
            AddMovie
          </Button>

          <Button 
          sx={{
            width: "10%",
          }}
          variant="contained" onClick={() => Navigate("/")}>
            Back
          </Button>
        </Stack>
      </Box>
    </>
  );
};

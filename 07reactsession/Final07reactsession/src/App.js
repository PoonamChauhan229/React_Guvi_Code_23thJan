import Navbar from "./Components/Navbar";
import AddColor from "./Components/AddColor";
import { AddMovie } from "./Components/AddMovie";
import MovieList from "./Components/MovieList";
import { useState } from "react";
import { allmovies } from "./Components/constants";
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import NotFound from "./Components/NotFound";
import { MovieDetails } from "./Components/MovieDetails";

function App() {
  const [movieList, setMovieList] = useState(allmovies);
  console.log(movieList)

  return (
    <div className="App">
    
      <Navbar />
      <Routes>
        <Route exact path="/" element={<MovieList movieList={movieList} />} />
        <Route
          exact
          path="/addmovie"
          element={
            <AddMovie movieList={movieList} setMovieList={setMovieList} />
          }
        />
        <Route exact path="/colorgame" element={<AddColor />} />
        <Route
          exact
          path="/addcolor"
          element={<Navigate replace to="/colorgame" />}
        />
        <Route exact path="/movies/:id" element={<MovieDetails  movieList={movieList}/>} />

        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />

        
      </Routes>
    </div>
  );
}

export default App;


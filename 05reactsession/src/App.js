import Navbar from './Navbar';
import AddColor from './AddColor';
import { AddMovie } from './AddMovie';
import MovieList from './MovieList';
import { useState } from 'react';
import { allmovies } from "./constants";

function App() {
  const [movieList, setMovieList] = useState(allmovies)

  
  return (
    <div className="App">
      <Navbar/>
      <AddMovie movieList={movieList} setMovieList={setMovieList} />    
      <AddColor/>
      <MovieList movieList={movieList}/>      
    </div>
  );
}

export default App;

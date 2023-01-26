import Navbar from './Navbar';
import AddColor from './AddColor';
import { AddMovie } from './AddMovie';
import MovieList from './MovieList';
import { useState } from 'react';
import { allmovies } from "./constants";
import { Navigate, Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';

function App() {
  const [movieList, setMovieList] = useState(allmovies)

  
  return (
    <div className="App">
      <Navbar/>      
      <Routes>
          <Route exact path='/' element={<MovieList movieList={movieList}/> }/>
          <Route exact path='/addmovie' element={<AddMovie movieList={movieList} setMovieList={setMovieList} />}/>
          <Route exact path='/colorgame' element={<AddColor/>}/>
          <Route exact path="/addcolor" element={<Navigate replace to="/colorgame"/>}/>
          
          <Route path='/404' element={<NotFound/>}/> 
          <Route path="*" element={<Navigate replace to ="/404"/>}/>
      </Routes>     
      
    </div>
  );
}

export default App;



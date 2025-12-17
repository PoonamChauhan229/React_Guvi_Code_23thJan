import Navbar from './Components/Navbar';
import AddColor from './Components/AddColor';
import { AddMovie } from './Components/AddMovie';
import MovieList from './Components/MovieList';
import { useState } from 'react';
import { allmovies } from "./Components/constants";
import { Navigate, Route, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound';
import {MovieDetails} from './Components/MovieDetails';
import './App.css'

function App() {
  // for the submission of addmovie.js
  const [movieList, setMovieList] = useState(allmovies)
  const [filterMovieList,setfilterMovieList] = useState(allmovies)
  
  return (
    <>
      <Navbar movieList={movieList} setMovieList={setMovieList} filterMovieList={filterMovieList} setfilterMovieList={setfilterMovieList}/>
      {/* <AddMovie movieList={movieList} setMovieList={setMovieList}/>      */}
      {/* <MovieList movieList={allmovies}/>  */}
      
      {/* <MovieList movieList={movieList}/> */}
      <Routes>
          <Route exact path='/' element={<MovieList movieList={movieList} filterMovieList={filterMovieList}/> }/>
          <Route exact path='/addmovie' element={<AddMovie movieList={movieList} setMovieList={setMovieList} />}/>
          <Route exact path='/colorgame' element={<AddColor/>}/>
          <Route exact path="/addcolor" element={<Navigate replace to="/colorgame"/>}/>
          
          <Route exact path="/movies/:id" element={<MovieDetails movieList={movieList}/>}/>
          {/* <Route path='*' element={<NotFound/>}/>  */}

          {/* Redirection */}

          <Route path='/404' element={<NotFound/>}/> 
          {/* <Route path="*" element={<Navigate replace to ="/404"/>}/> */}
      </Routes>     
      
    </>
  );
}

export default App;



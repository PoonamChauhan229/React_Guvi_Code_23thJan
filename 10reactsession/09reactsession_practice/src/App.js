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
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Paper } from '@mui/material';
import TicTacToe from './Components/TicTacToeGame/TicTacToe';


function App() {
  const [mode,setMode]=useState("dark")
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  // for the submission of addmovie.js
  const [movieList, setMovieList] = useState([])
  const [filterMovieList,setfilterMovieList] = useState([])

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={4} style={{minHeight:"100vh",borderRadius:"0px"}}>
      <Navbar movieList={movieList} setMovieList={setMovieList} filterMovieList={filterMovieList} setfilterMovieList={setfilterMovieList} mode={mode} setMode={setMode}/>
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

          <Route path='/tictactoe' element={<TicTacToe/>}/> 
      </Routes>     
      </Paper>
      </ThemeProvider> 
  );
}

export default App;



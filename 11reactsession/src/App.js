import Navbar from "./Navbar";
import AddColor from "./AddColor";
import { AddMovie } from "./AddMovie";
import MovieList from "./MovieList";
import { useState } from "react";
import { allmovies } from "./constants";
import {
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import NotFound from "./NotFound";
import { MovieDetails } from "./MovieDetails";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import TicTacToe from "./TicTacToe";
import Sigin from "./Sigin";
import Dashboard from "./Dashboard";
import Signup from "./Signup";
import Product from "./Product";




function App() {

  return (
   <>
   <Product/>
   </>

  );
}

export default App;


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
} from "react-router-dom";
import NotFound from "./NotFound";
import { MovieDetails } from "./MovieDetails";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';



function App() {
  const[mode,setMode]=useState('light')
  const [movieList, setMovieList] = useState(allmovies);
  console.log(movieList)

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
 


  return (
    <ThemeProvider theme={theme} >
        <Paper elevation={4} style={{minHeight: "100vh",borderRadius:"0px"}} >
          
        <div>          
            <Navbar mode={mode} setMode={setMode}/>
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
        
        </Paper>  
        
       
    </ThemeProvider>
  );
}

export default App;


import { Provider } from "react-redux";
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
import TicTacToe from "./TicTacToe";
import { EditMovie } from "./EditMovie";
import BasicForm from "./BasicForm";
import store from "./utils/store";
import Cart from "./Cart";
import ClassProfile from "./ClassComponent/ClassProfile";



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
    <Provider store={store}>
    <ThemeProvider theme={theme} >
        <Paper elevation={4} style={{minHeight: "100vh",borderRadius:"0px"}} >
          
        <div>          
            <Navbar mode={mode} setMode={setMode}/>
            <Routes>
              <Route exact path="/" element={<MovieList />} />
              <Route exact path="/addmovie" element={<AddMovie/>}/>
              <Route exact path="/basicform" element={<BasicForm/>}/>
              <Route exact path="/edit/:id" element={<EditMovie/>}/>
              
              <Route exact path="/colorgame" element={<AddColor />} />
              <Route
                exact
                path="/addcolor"
                element={<Navigate replace to="/colorgame" />}
              />

              <Route exact path="/tictactoe" element={<TicTacToe />} />
              <Route exact path="/movies/:id" element={<MovieDetails/>} />

              {/* <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate replace to="/404" />} /> */}

              <Route exact path="/cart" element={<Cart/>}/>

              {/* Passing props to class components */}
              <Route exact path="/profile" element={<ClassProfile name="Poonam"/>}/>
              
            </Routes>
        </div>
        
        </Paper>  
        
       
    </ThemeProvider>
    </Provider>
  );
}

export default App;


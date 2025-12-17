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
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "./HomePage";
import { AddBlog } from "./AddBlog";
import ProtectedRouteCookie from "./ProtectedRouteCookie";
import Profile from "./Profile";




function App() {
  const token=localStorage.getItem("token")
  // console.log(token)

 const navigate=useNavigate()
  const[mode,setMode]=useState('light')
  const [movieList, setMovieList] = useState(allmovies);
  // console.log(movieList)

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
 


  return (
    <>
    {/* {token && <ProtectedRouteCookie/>}
    {token && <Profile/>} */}
    
       
          <Routes>
            <Route exact path="/" element={<HomePage />} />
                <Route exact path="/signin" element={<Sigin />} />
                 <Route exact path="/signup" element={<Signup />} />
                 <Route exact path="/addblog" element={
                  // <ProtectedRoute token={token}>
                  //    <AddBlog/> 
                  // </ProtectedRoute>
                  <ProtectedRoute token={token} children={<AddBlog/>}/>
                 } />
               <Route exact path="/dashboard" element={
                <ProtectedRoute token={token}>
                  <Dashboard/>
                </ProtectedRoute>
                } />

                <Route exact path='/profile' element={
                  <ProtectedRouteCookie>
                    <Profile/>
                  </ProtectedRouteCookie>
                }
                />
          </Routes>
    </>


    // <ThemeProvider theme={theme} >
    //     <Paper elevation={4} style={{minHeight: "100vh",borderRadius:"0px"}} >
          
    //     <div>          
    //         <Navbar mode={mode} setMode={setMode}/>
    //         <Routes>
    //           <Route exact path="/" element={<MovieList />} />
    //           <Route
    //             exact
    //             path="/addmovie"
    //             element={
    //               <AddMovie movieList={movieList} setMovieList={setMovieList} />
    //             }
    //           />
    //           <Route exact path="/colorgame" element={<AddColor />} />
    //           <Route
    //             exact
    //             path="/addcolor"
    //             element={<Navigate replace to="/colorgame" />}
    //           />

    //           <Route exact path="/tictactoe" element={<TicTacToe />} />
    //           <Route exact path="/movies/:id" element={<MovieDetails/>} />

    //           <Route path="/404" element={<NotFound />} />
    //           <Route path="*" element={<Navigate replace to="/404" />} />

              
    //         </Routes>
    //     </div>
        
    //     </Paper>  
        
       
    // </ThemeProvider>

  );
}

export default App;


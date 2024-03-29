import { Link, useNavigate } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import {allmovies} from './constants'
import { useState } from "react";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

// creating a seperate function
const filterMovieData=(searchText,movieList)=>{
  return (movieList.filter((element)=>element.name.toUpperCase().includes(searchText.toUpperCase())))
}

const Navbar = ({movieList,setMovieList,filterMovieList, setfilterMovieList}) => {
  console.log(filterMovieList, setfilterMovieList)
  
  
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const [searchClicked,setSearchClicked]=useState(false)
 
  console.log(movieList)

 
  // filterMovieData()
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchText(value);
    console.log(value); // Log the search input value to the console    
  };
  const handleSearchBlur=(event)=>{
    setSearchClicked(!searchClicked)
    //filter the data
    // filterMovieData is return the value we will have to store it in variable
    const data=filterMovieData(searchText,movieList)
    console.log(data)
    // update the data
    // setMovieList(data)
    setfilterMovieList(data)
  }

  return (
    <>
  <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MoviesMania
          </Typography>
          <Divider />
      <Box sx={{display:"flex",flexGrow:0.1}}>
      <Button sx={{ color: '#fff' }} onClick={
                ()=>{navigate('/')}
              }>
                Home
      </Button>
      <Button sx={{ color: '#fff' }} onClick={
                ()=>{navigate('/addmovie')}
              }>
                AddMovies
      </Button>
      <Button sx={{ color: '#fff' }} onClick={
                ()=>{navigate('/colorgame')}
              }>
                ColorGame
      </Button>        
      </Box>
      <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search..."
        value={searchText}
        inputProps={{ 'aria-label': 'search' }}
        onChange={handleSearchChange} // Add the onChange event handler
        onBlur={handleSearchBlur}
        
      />
    </Search>
        </Toolbar>
      </AppBar>
    </Box>
      </>
  );
};
export default Navbar;

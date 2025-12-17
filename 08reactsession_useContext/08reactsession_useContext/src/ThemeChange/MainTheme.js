import React ,{useState} from 'react'
import Navbar from './Navbar'
import ThemeContext from './utils/ThemeContext';
import { Height } from '@mui/icons-material';

const MainTheme = () => {
    const [theme,setTheme]=useState({
        light:"light",
        dark:"dark",
        DarkBtn:"Dark 🌙",
        status:true
      })

      const styles = {
        background: theme.status === true ? "pink" : "black",
        height:"100vh",
        width:"100%",
      };
  return (
    <div>
        <ThemeContext.Provider value={[theme,setTheme]}>
        <Navbar/>
        <div style={styles} className='App'>       

        </div>
    </ThemeContext.Provider>
      
    </div>
  )
}

export default MainTheme
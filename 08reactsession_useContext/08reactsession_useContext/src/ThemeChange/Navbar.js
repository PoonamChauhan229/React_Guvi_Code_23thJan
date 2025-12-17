import React, { useContext } from 'react'
import ThemeContext from './utils/ThemeContext'

const Navbar = () => {
    const [theme,setTheme] = useContext(ThemeContext)

    const styles = {
        background: theme.DarkBtn === "Light 💡" ? "pink" : "black",
        color: theme.DarkBtn === "Light 💡" ? "black" : "pink"
      };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <button  style={styles} className="nav-link active" aria-current="page" href=""
        onClick={() => {
            setTheme({...theme,status:!theme.status,
                      DarkBtn:theme.DarkBtn === "Light 💡" ? "Dark 🌙" : "Light 💡"
            })
        }}> { theme.DarkBtn}</button>
       
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar
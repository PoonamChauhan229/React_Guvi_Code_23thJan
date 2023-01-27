import { Link } from "react-router-dom";
const Navbar = () => {
  return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">MoviesMania</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            <Link to="/addmovie" className="nav-link">Add Movies</Link>
            <Link to="/colorgame" className="nav-link">Color-Game</Link>
          </div>
        </div>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
         
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
      </nav>
  );
};
export default Navbar;

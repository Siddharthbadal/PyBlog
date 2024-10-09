import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    // navbar-expand-lg
    <nav className="navbar navbar-expand bg-primary" data-bs-theme="dark">
    <div className="container-fluid">
        
      <Link className="navbar-brand icon-link fw-bold" to="/">
      📝
        PyBlog
      </Link>
      {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}
      
        <ul className="navbar-nav">          
          <li className="nav-item">
            <Link className="nav-link fw-bold" to="/signup">SignUp</Link>
          </li>          
        </ul>
       
    </div>
  </nav>
  )
}

export default NavBar;
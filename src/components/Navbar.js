import React from 'react'
import { Link } from "react-router-dom";

const Navbar =()=>{
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/">News<span>Nova</span></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
     <Link className="nav-link" to="/"><li className='nav-item'>Home</li></Link>
        <Link className="nav-link" to="/general"><li className="nav-item">General</li></Link>
        <Link className="nav-link" to="/business"><li className="nav-item">Business</li></Link>
        <Link className="nav-link" to="/entertainment"><li className="nav-item">Entertainment</li></Link>
        <Link className="nav-link" to="/health"><li className="nav-item">Health</li></Link>
        <Link className="nav-link" to="/science"><li className="nav-item">Science</li></Link>
        <Link className="nav-link" to="/sports"><li className="nav-item">Sports</li></Link>
        <Link className="nav-link" to="/technology"><li className="nav-item">Technology</li></Link>
      
    </ul>
  </div>
</nav>
      </div>
    )
  }
  export default Navbar

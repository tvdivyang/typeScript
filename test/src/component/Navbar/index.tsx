import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar:React.FC = ()=> {
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="/"><span className="text-warning">Build</span>Con</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
             <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/input">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/api">Team</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Contact</NavLink>
            </li>
          </ul>
        </div>
    </div>
  </nav>
    </div>
  )
}

export default Navbar;
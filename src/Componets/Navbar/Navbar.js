  import React from 'react'
import logo from "./image/logo.png"
import './Navbar.css'
export default function Navbar() {
  return (
    <div>
      
      <nav className="navbar  navbar-expand-lg navbar-light bg-light">
      
  <div className="container-fluid">
      
    <div>
    <img src={logo} alt="" className='img'/ >
    </div>
     
    <a className="navbar-brand" href="/"> V-Lab @ ANDC</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="https://www.vlab.andcollege.du.ac.in/index.html#labs_section" target='blank'>Labs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="https://www.vlab.andcollege.du.ac.in/index.html#labs_section" target='blank'>Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="https://www.andcollege.du.ac.in/" target='blank'>College Website</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="https://www.andcollege.du.ac.in/" target='blank'>About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="https://www.andcollege.du.ac.in/" target='blank'>Contact</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>


    </div>
  )
}

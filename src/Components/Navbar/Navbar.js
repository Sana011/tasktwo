import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid navBar ">
    <a className="navbar-brand nav-Logo" href="#">Fly-Ship</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav nav-ull ms-auto">
        <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar


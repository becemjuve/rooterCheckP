import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark ">
      <div className="container-fluid d-flex justify-content-between">
        <Link className="navbar-brand text-light" to="/">Movie-BEST</Link>
        
        <div className="collapse navbar-collapse " >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-light" to="/">Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

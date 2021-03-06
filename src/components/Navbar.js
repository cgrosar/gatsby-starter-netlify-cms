import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container navbar-container">
      <Link className="navbar-item" to="/">
        Home
      </Link>
      <Link className="navbar-item" to="/article/2018-12-17-links">
        Links
      </Link>
      <Link className="navbar-item" to="/article/2019-01-16-downloads">
        Downloads
      </Link>
      <Link className="navbar-item" to="/article/2018-12-17-journal-club">
        Journal club
      </Link>
      <Link className="navbar-item" to="/article/2017-12-17-guidelines">
        Guidelines
      </Link>
      <Link className="navbar-item" to="/article/2019-01-16-ziele-dieser-website">
        Ziele dieser Website 
      </Link>
      <Link className="navbar-item" to="/about">
        Über den Autor
      </Link>
    </div>
  </nav>
)

export default Navbar

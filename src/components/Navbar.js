import React from 'react';
import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <Link className="navbar-brand circle-logo bg-light" to="/">
          Far Vision
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="coursesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Courses
              </a>
              <ul className="dropdown-menu" aria-labelledby="coursesDropdown">
              <li className="nav-item dropdown">
                  <NavLink className="nav-link" to="/course-one"activeClassName="active"  >
                    Data Analysis
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                <NavLink className="nav-link" to="/course-two" activeClassName="active">
                  Full Stack Development
                </NavLink>
                </li>
                <li className="nav-item dropdown">
                <NavLink className="nav-link" to="/course-three"activeClassName="active">
                  Data Science
                </NavLink>
                </li>
                <li className="nav-item dropdown">
                <NavLink className="nav-link" to='/course-four'activeClassName="active">
                  Data Engineering
                  </NavLink>  
                </li>
                <li className="nav-item dropdown">
                <NavLink className="nav-link" to="/course-five"activeClassName="active">
                  Machine Learning
                </NavLink>
                <li className="nav-item dropdown">
                 <NavLink className="nav-link" to='/course-six' activeClassName="active">
                  DevOps
                 </NavLink>
                 <li className="nav-item dropdown">
                  <NavLink className="nav-link" to='/course-seven'activeClassName="active">
                    Blockchain
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                <NavLink className="nav-link" to='/course-nine'activeClassName="active">
                  Mobile Development
                </NavLink>
                </li>


                </li>
                </li>

              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="programsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Programs
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="programsDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Data Science
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Machine Learning
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  Deep Learning
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  Generative AI
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  Metaverse
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Web Application
                  </a>
                  <li>
                  <a className="dropdown-item" href="#">
                  Mobile Application
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  Project Managment
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  Product Managment
                  </a>
                </li>
                </li>

              </ul>
            </li>
          </ul>
          <div className="d-flex">
            <Link className='nav-link' to='/register'>Register</Link>
            <Link className='nav-link'to='/login'>Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

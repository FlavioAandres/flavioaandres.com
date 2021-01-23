import React from "react";

const Navbar = (props) => {
  const imagebrand = 'favicon.ico'
  return (
    <nav className="navbar navbar-expand-lg navbar-container dark-background">
      <a class="navbar-brand" href="#">
        <img src={imagebrand} alt="" srcset=""/>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-ellipsis-h"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="" className="nav-link">
              About Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar
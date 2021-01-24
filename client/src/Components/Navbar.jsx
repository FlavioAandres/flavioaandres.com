import React from "react";
import { useLocation, Link } from "react-router-dom";

const Navbar = (props) => {
  const location = useLocation();

  const imagebrand = "favicon.ico";
  return (
    <nav className="navbar navbar-expand-lg navbar-container dark-background">
      <Link class="navbar-brand" to="/">
        <img src={imagebrand} alt="" srcset="" />
      </Link>
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
      <div
        style={{
          justifyContent: "flex-end",
        }}
        className="collapse navbar-collapse"
        id="navbarNav"
      >
        <ul className="navbar-nav ">
          <li className="nav-item">
            <Link to={location.pathname === "/about" ? "/" : "/about"} className="nav-link">
              {location.pathname === "/about" ? "Home" : "About me"}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

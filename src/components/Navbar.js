import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (screenSize <= 576) {
      if (openMenu) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "visible";
      }
    } else {
      document.body.style.overflow = "visible";
    }
  }, [screenSize, openMenu]);

  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", updateScreenSize);
    updateScreenSize();
  }, []);

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo">
        <img src="assets/shared/logo.svg" alt="logo" />
      </NavLink>

      <ul className={`nav-items ${openMenu ? "fade-in" : ""}`}>
        <li className="nav-item">
          <button className="close-menu" onClick={() => setOpenMenu(!openMenu)}>
            <img src="assets/shared/close.svg" alt="close" />
          </button>
        </li>
        <li className="nav-item">
          <NavLink
            to="/"
            className={`nav-link ${
              location.pathname === "/" ? "link-active" : ""
            }`}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <span>00.</span> Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/destination"
            className={`nav-link ${
              location.pathname === "/destination" ? "link-active" : ""
            }`}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <span>01.</span> Destination
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/crew"
            className={`nav-link ${
              location.pathname === "/crew" ? "link-active" : ""
            }`}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <span>03.</span> Crew
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/technology"
            className={`nav-link ${
              location.pathname === "/technology" ? "link-active" : ""
            }`}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <span>04.</span> Technology
          </NavLink>
        </li>
      </ul>

      <button className="open-menu" onClick={() => setOpenMenu(!openMenu)}>
        <img src="assets/shared/menu.svg" alt="hamburger" />
      </button>
    </nav>
  );
}

export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/mainNav.scss";

export default function MainNav() {
  return (
    <nav className="nav-wrapper">
      <div className="nav-items-wrapper">
        <Link to={"/"} className="nav-button">
          Home
        </Link>
        <Link to={"../About"} className="nav-button">
          About
        </Link>
        <Link to={"../Contact"} className="nav-button">
          Contact
        </Link>
      </div>
    </nav>
  );
}

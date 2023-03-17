import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/mainNav.scss";

export default function MainNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="nav-wrapper">
      <div className="nav-items-wrapper">
        <Link
          className={`nav-button ${
            isOpen ? "main-nav-open" : "main-nav-closed"
          }`}
          onClick={handleClick}
        >
          {isOpen ? "Menu" : "x"}
        </Link>
        <Link to={"/"} className="nav-button">
          Projects
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

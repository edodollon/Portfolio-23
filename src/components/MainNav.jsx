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
        <Link
          to={"/"}
          className={`nav-button ${
            isOpen ? "main-nav-first closed-f" : "main-nav-first opened"
          }`}
        >
          Projects
        </Link>
        <Link
          to={"../About"}
          className={`nav-button ${
            isOpen ? "main-nav-second closed-s" : "main-nav-second opened"
          }`}
        >
          About
        </Link>
        <Link
          to={"../Contact"}
          className={`nav-button ${
            isOpen ? "main-nav-third closed-t" : "main-nav-third opened"
          }`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

import "../styles/mainNav.scss";
import { Link } from "react-router-dom";

export default function MainNav() {
  return (
    <nav className="nav-wrapper">
      <div className="nav-items-wrapper">
        <Link className="nav-button">Home</Link>
      </div>
    </nav>
  );
}

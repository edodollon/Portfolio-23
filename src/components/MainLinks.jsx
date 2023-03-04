import { Link } from "react-router-dom";
import "../styles/mainLinks.scss";

export default function MainLinks() {
  return (
    <div className="nav">
      <div>
        <a href="">WORKS</a>
      </div>
      <div>
        <Link to={`About`}>ABOUT</Link>
      </div>
      <div>
        <a href="">CONTACT</a>
      </div>
    </div>
  );
}

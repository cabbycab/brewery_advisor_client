import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="Header">
      <Link to="/">
        <h1>BreweryAdvisor</h1>
        <Link to="/newbrewery">Add a New Brewery</Link>
      </Link>
    </header>
  );
}

export default Header;

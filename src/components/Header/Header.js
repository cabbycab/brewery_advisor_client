import "./Header.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Header(props) {
  const fixedText = "fixed";
  const whenNotFixed = "not fixed";
  const [headerText, setHeaderText] = useState(fixedText);
  useEffect(() => {
    const header = document.getElementById("brewHeader");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        if (headerText !== fixedText) {
          setHeaderText(fixedText);
        }
      } else {
        header.classList.remove("sticky");
        if (headerText !== whenNotFixed) {
          setHeaderText(whenNotFixed);
        }
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  });

  return (
    <header className="Header" id="brewHeader">
      <Link to="/" className="home-link">
        <h1>
          <i className="fas fa-beer"></i>BreweryAdvisor
        </h1>
      </Link>
      <Link to="/newbrewery">Add a New Brewery</Link>
    </header>
  );
}

export default Header;

import "./Footer.css";

function Footer(props) {
    return (
      <footer className="Footer">
        <div>Copyright &copy; BreweryAdvisor {new Date().getFullYear()} All Rights Reserved</div>
      </footer>
    );
}

export default Footer;
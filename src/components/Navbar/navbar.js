import logo from "../../AppBar.logo.svg";
import "./navbar.css";

const Navbar = () => (
  <nav className="AppBar">
    <img className="AppBar-logo" src={logo} aria-label="people" alt="People" />
  </nav>
);

export default Navbar;

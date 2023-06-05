import { Link } from "react-router-dom";

import style from "../css/Navbar.module.css";
import logo from "../../img/money-bag.png";

import Container from "./Container";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Money Bag" />
        </Link>
        <ul className={style.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/newbudget">New Budget</Link>
          </li>
          <li>
            <Link to="/mybudget">My Bugets</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;

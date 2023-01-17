import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.jpeg";

const Title = () => {
  return (
    <a href="/">
      <img alt="logo" className="logo" src={Logo} />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link class="active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button
          className="LogoutButton"
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          className="LoginButton"
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};
export default Header;

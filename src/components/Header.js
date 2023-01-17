import { useState } from "react";

const Title = () => {
  return (
    <a href="/">
      <img
        alt="logo"
        className="logo"
        src="https://static.vecteezy.com/system/resources/previews/006/395/395/original/food-point-logo-symbol-and-icon-template-to-show-the-location-of-the-food-seller-vector.jpg"
      />
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
            <a class="active" href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Cart</a>
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

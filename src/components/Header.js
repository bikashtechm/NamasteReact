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
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;

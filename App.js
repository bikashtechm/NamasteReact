import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
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
    <>
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
    </>
  );
};

const Body = () => {
  return (
    <>
      <h4>Body Content here...</h4>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <h4>Footer Content here...</h4>
    </>
  );
};
root.render(<AppLayout />);

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

const RestaurantCard = () => {
  return (
    <div className="card">
      <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/7bb739d7f6ae8b4ce8ed590765dffd2f" />
      <h2>McDonald's</h2>
      <h3>Burger's , American</h3>
      <h4>4.2 Stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <RestaurantCard />
    </div>
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

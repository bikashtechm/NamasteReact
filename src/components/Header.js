import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <a href="/">
      <img alt="logo" className="h-28 w-28 p-2" src={Logo} />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between bg-amber-200 shadow-lg p-2">
      <Title />
      <div className="py-9">
        <ul className="flex p-2">
          <li>
            <Link
              className="p-2 m-2 text-black rounded-md hover:bg-blue-200 font-semibold"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="p-2 m-2 text-black rounded-md hover:bg-blue-200 font-semibold"
              to="/about"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="p-2 m-2 text-black rounded-md hover:bg-blue-200 font-semibold"
              to="/contact"
            >
              Contact Us
            </Link>
          </li>

          <li>
            <Link
              className="p-2 m-2 text-black rounded-md hover:bg-blue-200 font-semibold"
              to={"/instamart"}
            >
              Instamart
            </Link>
          </li>

          <li>
            <Link
              className="p-2 m-2 text-black rounded-md hover:bg-blue-200 font-semibold"
              to="/cart"
            >
              Cart - <span className="text-xs">{cartItems.length}</span>
            </Link>
          </li>
        </ul>
      </div>
      <span className="p-11 font-bold text-red-900">{user.name}</span>

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

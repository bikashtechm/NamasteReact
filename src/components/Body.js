import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterRestaurantData } from "../utils/helper";
import { OFFLINE_ICON } from "../Constants";
import useOnline from "../utils/useOnline";

const Body = () => {
  useEffect(() => {
    getRestaurants();
  }, []);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  const [filterRestaurantListData, setfilterRestaurantListData] = useState([]);
  const online = useOnline();
  if (!online) {
    return (
      <div className="content">
        <h4>
          <img
            className="online_offline_icon"
            src={OFFLINE_ICON}
            alt="offline"
          />
          Offline ! Please check your internet connection...
        </h4>
      </div>
    );
  }
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.603814324829916&lng=73.77531129972304&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setfilterRestaurantListData(json?.data?.cards[2]?.data?.data?.cards);
  }
  if (!allRestaurants) return null;
  // if (filterRestaurantListData.length === 0)
  //   return (
  //     <>
  //       <h1>No such restaurant found...</h1>
  //     </>
  //   );
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="content">
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="What are you looking for?"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        <button
          type="submit"
          className="searchButton"
          onClick={() => {
            if (searchTxt === "") {
              const data = filterRestaurantData(searchTxt, allRestaurants);
              setfilterRestaurantListData(data);
            } else {
              const data = filterRestaurantData(searchTxt, allRestaurants);
              setfilterRestaurantListData(data);
            }
          }}
        >
          {" "}
          Search
        </button>
      </div>
      <div className="restaurant-lists">
        {filterRestaurantListData.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;

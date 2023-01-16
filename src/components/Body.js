import { useState, useEffect } from "react";
import { RestaurantLists } from "../Constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
const Body = () => {
  useEffect(() => {
    getRestaurants();
  }, []);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  const [filterRestaurantListData, setfilterRestaurantListData] = useState([]);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setfilterRestaurantListData(json?.data?.cards[2]?.data?.data?.cards);
  }

  function filterRestaurantData(searchTxt, data) {
    return data.filter((res) => res.data.name.includes(searchTxt));
  }
  return filterRestaurantListData.length === 0 ? (
    <Shimmer />
  ) : (
    <>
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
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;

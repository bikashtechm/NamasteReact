import { useState } from "react";
import { RestaurantLists } from "../Constants";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [restaurantListData, setRestaurantListData] = useState(RestaurantLists);

  function filterRestaurantData(searchTxt, data) {
    return data.filter((res) => res.data.name.includes(searchTxt));
  }
  return (
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
            const data = filterRestaurantData(searchTxt, restaurantListData);
            setRestaurantListData(data);
          }}
        >
          {" "}
          Search
        </button>
      </div>
      <div className="restaurant-lists">
        {restaurantListData.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;

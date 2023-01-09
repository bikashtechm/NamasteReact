import { RestaurantLists } from "../Constants";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  return (
    <>
      <div class="search">
        <input
          type="text"
          class="searchTerm"
          placeholder="What are you looking for?"
          value=""
        />
        <button type="submit" class="searchButton">
          Search
        </button>
      </div>
      <div className="restaurant-lists">
        {RestaurantLists.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;

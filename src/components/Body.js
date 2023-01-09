import { RestaurantLists } from "../Constants";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  return (
    <div className="restaurant-lists">
      {RestaurantLists.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
      })}
    </div>
  );
};

export default Body;

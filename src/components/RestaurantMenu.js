import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menuCard">
      <span className="restaurantcard">
        <img
          className="avatar"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant.name}
        />
        <div className="restaurantcontainer">
          <h4>
            <b>{restaurant?.name}</b>
          </h4>
          <p>Restaurant ID : {resId}</p>
          <p>Area : {restaurant?.area}</p>
          <p>City : {restaurant?.city}</p>
          <p>Rating : {restaurant?.avgRating} Stars</p>
        </div>
      </span>
      <span className="menuList">
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </span>
    </div>
  );
};

export default RestaurantMenu;

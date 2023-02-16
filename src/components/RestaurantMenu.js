import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);

  const dispatch = useDispatch();

  // const handleAddItem = () => {
  //   dispatch(addItem("Grape"));
  // };

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex">
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
      <div>
        {/* <button
          className="p-2 m-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={() => handleAddItem()}
        >
          Add Item
        </button> */}
      </div>
      <span className="ml-4 mb-4">
        <h1>Menu</h1>
        <h1></h1>
        <ul className="">
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>
              {item.name}{" "}
              <button
                className="px-1 py-0 text-sm font-small text-center text-white bg-green-600 rounded-sm hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => addFoodItem(item)}
              >
                +
              </button>
            </li>
          ))}
        </ul>
      </span>
    </div>
  );
};

export default RestaurantMenu;

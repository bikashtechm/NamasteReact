import { useContext } from "react";
import { IMG_CDN_URL } from "../Constants";
import UserContext from "../utils/UserContext";
const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-52 p-2 m-2 shadow-lg bg-orange-50">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <div className="font-bold text-sm">{name}</div>
      <div className="text-xs">{cuisines.join(", ")}</div>
      <div className="text-xs">{avgRating} Stars</div>
      <div className="text-xs">{user.name}</div>
      <div className="text-xs">{user.email}</div>
    </div>
  );
};
export default RestaurantCard;

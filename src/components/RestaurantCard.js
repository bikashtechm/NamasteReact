import { IMG_CDN_URL } from "../Constants";
const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <div className="restaurant-name">{name}</div>
      <div className="restaurant-cuisines">{cuisines.join(", ")}</div>
      <div className="restaurant-star">{avgRating} Stars</div>
    </div>
  );
};
export default RestaurantCard;

import { IMG_CDN_URL } from "../Constants";
const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="w-52 p-2 m-2 shadow-lg bg-orange-50">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <div className="font-bold text-sm">{name}</div>
      <div className="text-xs">{cuisines.join(", ")}</div>
      <div className="text-xs">{avgRating} Stars</div>
    </div>
  );
};
export default RestaurantCard;

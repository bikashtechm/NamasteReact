import { IMG_CDN_URL } from "../Constants";
const FoodItems = ({ cloudinaryImageId, name, description, price }) => {
  return (
    <div className="w-52 p-2 m-2 shadow-lg bg-orange-50">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <div className="font-bold text-sm">{name}</div>
      <div className="text-xs">Rs- {price / 100}</div>
      <div className="text-xs">{description} </div>
    </div>
  );
};
export default FoodItems;

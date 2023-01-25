import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constants";
import AVARAT_IMG from "../assets/images/img_avatar.png";
import Shimmer from "./Shimmer";
import { FETCH_MENU_URL } from "../Constants";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
    console.log(resInfo);
  }

  return !resInfo ? (
    <Shimmer />
  ) : (
    <div className="menuCard">
      <span className="restaurantcard">
        <img
          className="avatar"
          src={IMG_CDN_URL + resInfo?.cloudinaryImageId}
          alt={resInfo.name}
        />
        <div className="restaurantcontainer">
          <h4>
            <b>{resInfo.name}</b>
          </h4>
          <p>Restaurant ID : {resId}</p>
          <p>Area : {resInfo.area}</p>
          <p>City : {resInfo.city}</p>
          <p>Rating : {resInfo?.avgRating} Stars</p>
        </div>
      </span>
      <span className="menuList">
        <h1>Menu</h1>
        <ul>
          {Object.values(resInfo?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </span>
    </div>
  );
};

export default RestaurantMenu;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AVARAT_IMG from "../assets/images/img_avatar.png";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=18.603814324829916&lng=73.77531129972304&menuId=642768"
    );
    const json = await data.json();
    console.log(json);
  }

  return (
    <>
      <div className="restaurantcard">
        <img className="avatar" src={AVARAT_IMG} alt="Avatar" />
        <div className="restaurantcontainer">
          <h4>
            <b>{resId}</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;

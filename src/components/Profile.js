import React, { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(20);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("setInterval called inside useEffect()");
    }, 1000);

    // START - This will be called when we are unmounting the component
    return () => {
      clearInterval(timer);
    };
    // END - This will be called when we are unmounting the component
  }, []);
  return (
    <div className="content">
      <h4>Profile Functional Component...</h4>
      <h5>Functional - Name:{props.name}</h5>
      <h6>Functional - Count: {count}</h6>
      <h6>Functional - Target: {target}</h6>
      <button
        onClick={() => {
          setCount(20);
        }}
      >
        Count
      </button>
    </div>
  );
};

export default Profile;

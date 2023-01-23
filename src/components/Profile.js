import React, { useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(20);
  return (
    <div>
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

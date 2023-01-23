import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

const About = () => {
  return (
    <div>
      <h1>About Us Page here...</h1>
      <ProfileClass name={"Bikash Class Based Props"} />
      <Profile name={"Bikash functional Based Props"} />
    </div>
  );
};

export default About;

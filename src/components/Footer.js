import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="text-center bg-green-200">
      <p>
        Author: {user.name}
        <br />
        <div className="font-bold">
          This site is developed by - {user.name} : {user.email}
        </div>
      </p>
    </div>
  );
};

export default Footer;

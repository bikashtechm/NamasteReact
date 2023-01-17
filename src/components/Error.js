import { useRouteError } from "react-router-dom";
import ERROR from "../assets/images/error.jpeg";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="errorPage">
      <img src={ERROR} alt="Error" />
      <h2>{err.status + " : " + err.statusText}</h2>
    </div>
  );
};

export default Error;

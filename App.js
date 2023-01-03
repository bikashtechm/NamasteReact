import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const NameComponent = () => {
  return <h1>Bikash Shaw</h1>;
};
const HeaderComponent = () => {
  return (
    <div>
      {NameComponent()}
      <NameComponent />
      <h1>Functional Header Component</h1>;
    </div>
  );
};
root.render(<HeaderComponent />);

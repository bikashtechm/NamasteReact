import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Bikash Shaw",
    email: "1985.bikash.shaw@gmail.com",
  },
});

export default UserContext;

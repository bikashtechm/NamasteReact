import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Aarav Shaw",
    email: "aarav.shaw@gmail.com",
  },
});

export default UserContext;

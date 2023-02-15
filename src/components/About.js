import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="content">
        <h3>About Us Page</h3>
        <UserContext.Consumer>
          {({ user }) => (
            <h2 className="p-1 m-1 font-bold text-xl text-red-900">
              {user.name}
            </h2>
          )}
        </UserContext.Consumer>
        <ProfileClass />
      </div>
    );
  }
}

export default About;

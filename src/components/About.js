import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h3>About Us Page</h3>
        <ProfileClass />
      </div>
    );
  }
}

export default About;

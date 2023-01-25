import Profile from "./Profile";
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
        <Profile />
      </div>
    );
  }
}

export default About;

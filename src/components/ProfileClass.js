import React, { Component } from "react";

class ProfileClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
        company: "Dummy Company",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate called..");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <div className="content">
        <img className="avtar_size" src={this.state.userInfo?.avatar_url} />
        <h3>Name: {this.state.userInfo?.name}</h3>
        <h4>Location: {this.state.userInfo?.location}</h4>
        <h5>Company: {this.state.userInfo?.company}</h5>
      </div>
    );
  }
}

export default ProfileClass;

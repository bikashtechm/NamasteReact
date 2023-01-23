import React, { Component } from "react";

class ProfileClass extends Component {
  constructor(props) {
    super();
    this.state = {
      count: 0,
      target: 20,
    };
  }
  render() {
    const { target } = this.state;
    return (
      <div>
        <h1>Profile Class Component</h1>
        <h2>Name:{this.props.name}</h2>
        <h3>Count : {this.state.count}</h3>
        <h4>Target: {target}</h4>
      </div>
    );
  }
}

export default ProfileClass;

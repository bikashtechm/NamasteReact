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
        <h4>Profile Class Component</h4>
        <h5>Class - Name:{this.props.name}</h5>
        <h6>Class - Count : {this.state.count}</h6>
        <h6>Class - Target: {target}</h6>
        <button
          onClick={() => {
            this.setState({ count: 10 });
          }}
        >
          Count
        </button>
        <br />
      </div>
    );
  }
}

export default ProfileClass;

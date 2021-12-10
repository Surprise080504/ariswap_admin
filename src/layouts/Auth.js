import React, { Component } from "react";
class Unauth extends Component {  
  render() {
    return (
      <div className="wrapper login-wrapper">
          {this.props.children}
      </div>
    );
  }
}

export default Unauth;

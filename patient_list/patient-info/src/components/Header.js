import React, { Component } from "react";


import Logo from "./djreact.png";



class Header extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src={Logo}
          width="200"
          className="img-thumbnail"
          style={{ marginTop: "10px" }}
        />
        <hr />
		<h5>Patient List</h5>
        <h1>App with React + Django</h1>
      </div>
    );
  }
}

export default Header;
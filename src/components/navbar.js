import React, { Component } from "react";
import logo from "../assets/dota-2.png";
export default class navbar extends Component {
  render() {
    return (
      <nav className="site-header py-1 bg-light">
        <div className="container d-flex">
          <div className="navbar-brand">
            <img src={logo} alt="logo" />
          </div>
          <div className="row ml-auto pt-4">
            <div className="col text-capitalize">Dummy</div>
            <div className="col">Dummy</div>
          </div>
        </div>
      </nav>
    );
  }
}

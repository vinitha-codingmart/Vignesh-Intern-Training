import React, { Component } from "react";
import "./Amenitiescontainer.css";
import Security from "./Security";
import Hos from "./Hos";
import Home from "./Home";
class Amenitiescontainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ne">
        <Security />

        <Home />
        <Hos />
      </div>
    );
  }
}

export default Amenitiescontainer;

import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";

// import './app.css';

import Gridc from "./components/Gridcontainer/Gridcontainer";
// import Dropdown from './components/dropdown'
import Search from "./components/search/Search";
import G2 from "./components/Gridcontainer/G2";
// import Home from './components/Home'
import Amenitiescontainer from "./components/Amenitiescontainerss/Amenitiescontainer";
import Hotelcontainer from "./components/Hotel/Hotelcontainer";
import Traveller from "./components/traveller/Traveller";
import Policyhead from "./components/Terms/Policyhead";
import Footer from "./components/footer/Footer";
// import admin from './components/Adminpage';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main">
        <div className="first">
          <Link to="/Newadmin" exact>
            <span>admin</span>
          </Link>
          <div className="f">
            <Search></Search>
          </div>
        </div>
        <br />
        <div className="def">
          <h1>What guests are saying about homes in India</h1>
          <br />
          <h3>
            India homes were rated 4.6 out of 5 stars with 510,000+ reviews
          </h3>
          <div className="gr">
            <Gridc></Gridc>
          </div>
          <G2></G2>
          <div className="gr">
            <Amenitiescontainer />
          </div>
          <hr style={{ color: "#484848", marginTop: "35px" }}></hr>
          {/*  */}
          {/* <h2 style = {{ color:"#484848",fontSize:"26px",marginTop:"45px"}}>Just booked in India</h2> */}

          <div className="gr">
            <Hotelcontainer />
            <p style={{ color: "#15B2D6", fontSize: "20px" }}>
              Show all (600+) >
            </p>
            <Traveller />
            <Policyhead />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;

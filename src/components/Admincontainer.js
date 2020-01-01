import React, { Component } from "react";
import { NavItem, NavLink, Nav } from "react-bootstrap";
// import app from ''
import { Link, Route, Switch } from "react-router-dom";
import record from "./Records";
import Barchart from "./Barchart";
import Manualgraph from "./Manualgraph";
import Reviewchart from "./Reviewchart";

// import Nav from "react-bootstrap/Nav"
import Adminpage from "./Adminpage";
class Admincontainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div
          className="nav"
          style={{
            backgroundColor: "#1278F9",
            height: "55px",
            color: "white",
            margin: "20px",
            borderRadius: "20px"
          }}
        >
          {/* <Nav pullRight style = {{marginTop:"2px"}}> */}
          {/* <NavItem> <Link to ='/'  style ={{color:"white",marginLeft:"10%",textDecoration:"none"}}exact ><span >record</span></Link></NavItem> */}

          <Link to="/" style={{ textDecoration: "none" }}>
            <div>
              <svg
                className="svg-icon"
                viewBox="0 0 20 20"
                style={{
                  width: "40px",
                  height: "30px",
                  float: "right",
                  marginTop: "20px",
                  marginRight: "10px"
                }}
              >
                <path d="M15.971,7.708l-4.763-4.712c-0.644-0.644-1.769-0.642-2.41-0.002L3.99,7.755C3.98,7.764,3.972,7.773,3.962,7.783C3.511,8.179,3.253,8.74,3.253,9.338v6.07c0,1.146,0.932,2.078,2.078,2.078h9.338c1.146,0,2.078-0.932,2.078-2.078v-6.07c0-0.529-0.205-1.037-0.57-1.421C16.129,7.83,16.058,7.758,15.971,7.708z M15.68,15.408c0,0.559-0.453,1.012-1.011,1.012h-4.318c0.04-0.076,0.096-0.143,0.096-0.232v-3.311c0-0.295-0.239-0.533-0.533-0.533c-0.295,0-0.534,0.238-0.534,0.533v3.311c0,0.09,0.057,0.156,0.096,0.232H5.331c-0.557,0-1.01-0.453-1.01-1.012v-6.07c0-0.305,0.141-0.591,0.386-0.787c0.039-0.03,0.073-0.066,0.1-0.104L9.55,3.75c0.242-0.239,0.665-0.24,0.906,0.002l4.786,4.735c0.024,0.033,0.053,0.063,0.084,0.09c0.228,0.196,0.354,0.466,0.354,0.76V15.408z"></path>
              </svg>
            </div>
          </Link>

          <Link to="/record" style={{ textDecoration: "none" }} >
            <span>
              <div>
                <svg
                  className="svg-icon"
                  viewBox="0 0 20 20"
                  style={{
                    width: "20px",
                    float: "right",
                    marginTop: "20px",
                    height: "2em",
                    marginRight: "30px"
                  }}
                >
                  <path d="M17.431,2.156h-3.715c-0.228,0-0.413,0.186-0.413,0.413v6.973h-2.89V6.687c0-0.229-0.186-0.413-0.413-0.413H6.285c-0.228,0-0.413,0.184-0.413,0.413v6.388H2.569c-0.227,0-0.413,0.187-0.413,0.413v3.942c0,0.228,0.186,0.413,0.413,0.413h14.862c0.228,0,0.413-0.186,0.413-0.413V2.569C17.844,2.342,17.658,2.156,17.431,2.156 M5.872,17.019h-2.89v-3.117h2.89V17.019zM9.587,17.019h-2.89V7.1h2.89V17.019z M13.303,17.019h-2.89v-6.651h2.89V17.019z M17.019,17.019h-2.891V2.982h2.891V17.019z"></path>
                </svg>
              </div>
            </span>
          </Link>

          {/* </Nav> */}
        </div>
        <Adminpage />
        {/* <Manualgraph /> */}
        <Barchart />
        <Reviewchart />
      </div>
    );
  }
}

export default Admincontainer;

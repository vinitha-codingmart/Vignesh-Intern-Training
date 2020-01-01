import React, { Component } from "react";

import { Link, Route, Switch } from "react-router-dom";
import Record from "./Records";
const axios = require("axios");

class Recordcontainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // tablerec:"",
      table: ""
    };
    this.handletable = this.handletable.bind(this);
  }

  handletable(e) {
    // console.log("first");
    // console.log(this.state.table);
    var a = e.target.value;
    this.setState({ table: a });

    console.log("for server", this.state.table, "haiii");

    axios
      .post("http://localhost:8081/table", {
        tablename: e.target.value
      })
      .then(res => {
        const nd = res.data;
        this.setState({ tablerec: nd });
        // console.log(this.state.style);

        // console.log(this.state.newdata);
        // console.log(this.state.newdata[0].id);
      });
  }

  render() {
    console.log("calledme");
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
          <select id="dropdown" onChange={this.handletable}>
            <option value="hotelco">hotel</option>
            <option value="reviewe">Reviewer</option>
          </select>

          {/* <Nav pullRight style = {{marginTop:"2px"}}> */}
          {/* <NavItem> <Link to ='/'  style ={{color:"white",marginLeft:"10%",textDecoration:"none"}}exact ><span >record</span></Link></NavItem> */}

          <Link to="/" style={{ textDecoration: "none" }}>
            <div>
              <svg
                class="svg-icon"
                viewBox="0 0 20 20"
                style={{
                  width: "40px",
                  height: "30px",
                  float: "right",
                  marginRight: "10px"
                }}
              >
                <path d="M15.971,7.708l-4.763-4.712c-0.644-0.644-1.769-0.642-2.41-0.002L3.99,7.755C3.98,7.764,3.972,7.773,3.962,7.783C3.511,8.179,3.253,8.74,3.253,9.338v6.07c0,1.146,0.932,2.078,2.078,2.078h9.338c1.146,0,2.078-0.932,2.078-2.078v-6.07c0-0.529-0.205-1.037-0.57-1.421C16.129,7.83,16.058,7.758,15.971,7.708z M15.68,15.408c0,0.559-0.453,1.012-1.011,1.012h-4.318c0.04-0.076,0.096-0.143,0.096-0.232v-3.311c0-0.295-0.239-0.533-0.533-0.533c-0.295,0-0.534,0.238-0.534,0.533v3.311c0,0.09,0.057,0.156,0.096,0.232H5.331c-0.557,0-1.01-0.453-1.01-1.012v-6.07c0-0.305,0.141-0.591,0.386-0.787c0.039-0.03,0.073-0.066,0.1-0.104L9.55,3.75c0.242-0.239,0.665-0.24,0.906,0.002l4.786,4.735c0.024,0.033,0.053,0.063,0.084,0.09c0.228,0.196,0.354,0.466,0.354,0.76V15.408z"></path>
              </svg>
            </div>
          </Link>

          <Link to="/admin" style={{ textDecoration: "none" }} exact>
            <span>
              <div>
                <svg
                  class="svg-icon"
                  viewBox="0 0 20 20"
                  style={{
                    width: "40px",
                    height: "30px",
                    float: "right",
                    marginRight: "20px"
                  }}
                >
                  <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
                </svg>{" "}
              </div>
            </span>
          </Link>

          {/* </Nav> */}
        </div>

        <Record tablename={this.state.table} />
      </div>
    );
  }
}

export default Recordcontainer;

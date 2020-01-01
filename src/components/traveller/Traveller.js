import React, { Component } from "react";
class Traveller extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h3 style={{ marginTop: "55px", fontSize: "25px", color: "#484848" }}>
          When are you travelling?
        </h3>
        <p style={{ marginTop: "8px", color: "#484848" }}>
          Add dates for updated pricing and availability.
        </p>

        <button
          style={{
            marginTop: "15px",
            height: "45px",
            width: "115px",
            backgroundColor: "#1F8489",
            color: "white",
            borderRadius: "5px",
            fontSize: "18px"
          }}
        >
          {" "}
          Add Dates{" "}
        </button>
      </div>
    );
  }
}

export default Traveller;

import React, { Component } from "react";
class Policy2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ width: "25%" }}>
        <h5 style={{ fontSize: "18px", color: "#484848" }}>
          {this.props.head}
        </h5>
        <p style={{ marginTop: "14px", fontSize: "16px", color: "#7A7B7F" }}>
          {" "}
          {this.props.line1}
        </p>
        <p style={{ marginTop: "8px", fontSize: "16px", color: "#7A7B7F" }}>
          {" "}
          {this.props.line2}
        </p>
        <p style={{ marginTop: "8px", fontSize: "16px", color: "#7A7B7F" }}>
          {" "}
          {this.props.line3}
        </p>
        <p style={{ marginTop: "8px", fontSize: "16px", color: "#7A7B7F" }}>
          {" "}
          {this.props.line4}
        </p>
        <p style={{ marginTop: "8px", fontSize: "16px", color: "#7A7B7F" }}>
          {" "}
          {this.props.line5}{" "}
          <button
            style={{
              backgroundColor: "#166A70",
              color: "white",
              borderRadius: "5px",
              borderBlockColor: "#166A70",
              width: "35px"
            }}
          >
            {" "}
            New
          </button>
        </p>
        <p style={{ marginTop: "8px", fontSize: "16px", color: "#7A7B7F" }}>
          {" "}
          {this.props.line6}
        </p>
      </div>
    );
  }
}

export default Policy2;

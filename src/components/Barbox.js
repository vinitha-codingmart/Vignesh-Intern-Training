import React, { Component } from "react";
import "./Barbox.css";
const axios = require("axios");

class Barbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: ""
    };
  }

  componentDidMount() {
    axios
      .post("http://localhost:8081/count")

      .then(res => {
        const nd = res.data;
        this.setState({ count: nd });
        console.log("count", this.state.count);
      });
  }

  bar = () => {
    return console.log(this.props.percent);
  };
  render() {
    return (
      <div
        className="Barbo"
        style={{ width: `${(this.props.percent / this.state.count) * 100}%` }}
      >
        {this.bar()}
      </div>
    );
  }
}

export default Barbox;

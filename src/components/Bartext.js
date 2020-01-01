import React, { Component } from "react";

import "./Bartext.css";
const axios = require("axios");

class Bartext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bartestss: []
    };
  }

  componentDidMount() {
    //     axios.post("http://localhost:8081/count")

    //     .then(res => {
    //       const nd = res.data;
    //       this.setState({ count: nd });
    //    console.log(this.state.count);
    //     });
    // }
    // displaybar(){
    axios
      .post("http://localhost:8081/barchart")

      .then(res => {
        console.log(res);
        console.log(res.data);
        const nd = res.data;
        console.log(nd);
        this.setState({ bartestss: res.data });
      
      });
  }

  bartextcontent = () => {
    return (
      <div className="bartextcontent" style={{ height: "18%" }}>
        {this.state.bartestss.map(data => (
          <div style={{ height: "100%" }}>{data.creationtime}</div>
        ))}
      </div>
    );
  };
  render() {
    return <div className="bar">{this.bartextcontent()}</div>;
  }
}

export default Bartext;

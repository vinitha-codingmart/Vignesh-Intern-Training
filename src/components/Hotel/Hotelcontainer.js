import React, { Component } from "react";
import Hotel from "./Hotel";
import "./Hotelcontainer.css";

const axios = require("axios");
class Hotelcontainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: []

      //    style :[
      //

      //         ],

      //         newdata:[]
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8081/get").then(res => {
      const nd = res.data;
      this.setState({ style: nd });
      console.log(this.state.style);

      // console.log(this.state.newdata);
      // console.log(this.state.newdata[0].id);
    });
  }

  render() {
    return (
      <div className="ho">
        {this.state.style.map(data => (
          <Hotel
            color={data.color}
            content={data.contents}
            img={data.src}
            head={data.head}
            content={data.content}
            price={data.price}
            rating={data.rating}
          ></Hotel>
        ))}

        {/* <h1> {this.state.newdata.img}  </h1>                            */}
      </div>
    );
  }
}

export default Hotelcontainer;

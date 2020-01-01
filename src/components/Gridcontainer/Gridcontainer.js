import React, { Component } from "react";
import Slider from "react-slick";
import Grid from "./Grid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Grid.css";
const axios = require("axios");
class Gridcontainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gdata: []
         };
  }

  componentDidMount() {
    axios.get("http://localhost:8081/getreviwer").then(res => {
      const nd = res.data;
      this.setState({ gdata: nd });
      console.log(this.state.gdata);

      
    });
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        {this.state.gdata.map(data => (
          <div className="nnnnm">
            <Grid
              src={data.src}
              text={data.text}
              logo={data.logo}
              name={data.name}
              city={data.city}
            />
          </div>
        ))}
      </Slider>
    );
  }
}

export default Gridcontainer;

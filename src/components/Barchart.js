import React, { Component } from "react";

import { Bar, Pie } from "react-chartjs-2";
import { connect } from "react-redux";

const axios = require("axios");

class Barchart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datavalue: [],
      creationtime: "",
      countvalue: "",
      newdata: [],
      reviewdata: [],
      rctime: "",
      rccount: ""
    };
  }

  getarray() {
    console.log(this.state.datavalue,"datavalue")
    var nd = [];
    var na = [];
    this.state.datavalue.map(data => {
      nd.push(data.creationtime);
      na.push(data.count);
    });
    this.setState({ creationtime: nd });
    this.setState({ countvalue: na });

    console.log("after redux hello", this.state.creationtime);
    console.log("after reduxhellocount", this.state.countvalue);

    let mydata = {
      labels: this.state.creationtime,
      datasets: [
        {
          label: "Week Dataset",
          // backgroundColor: 'rgba(255,99,132,0.2)',
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: this.state.countvalue
        }
      ]
    };
    this.setState({ newdata: mydata });

    console.log("labels", mydata.labels);

    console.log("newdata", this.state.newdata);
  }

  dynamicarray() {
    this.getarray();
  }



  newfun(){

  }

  componentDidMount() {
    axios.post("http://localhost:8081/barchart")
    .then(res => {
      console.log("didddddddd",res.data);

      this.setState({ datavalue: res.data});
      console.log("new", this.props.new.data);

      this.dynamicarray();
    });
  }
  render() {
    let cd =[]
    let co = []

    for(let i = 0;i<this.props.new.data.length;i++)
    {
       cd.push(this.props.new.data[i].creationtime)
       console.log( "haiii",cd)
       co.push(this.props.new.data[i].count)
    }
    let a = {
      labels: cd,
      datasets: [
        {
          label: "Week Dataset",
          // backgroundColor: 'rgba(255,99,132,0.2)',
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: co
        }
      ]
    };
 
    return (
      <div>
        <div style={{ display: "flex" }}>
          <div style={{ height: "300px", width: "30%" }}>
            <Bar
              data={a}
              
              options={{
                maintainAspectRatio: false
              }}
            />
          </div>
          <div style={{ height: "300px", width: "30%" }}>
            <Pie data={this.state.newdata} />
          </div>
          {console.log("props redus", this.props.new)}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    new: state
  };
};

export default connect(mapStateToProps, null)(Barchart);
    

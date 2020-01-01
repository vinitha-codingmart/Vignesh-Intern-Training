import React, { Component } from "react";
import "./Admin.css";
// import Crud from "./Crud";
// import { Button } from "react-bootstrap";
// import Formimage from "./Formimage"
import { connect } from "react-redux";
// import Action from "./Action"
import { getdat, getda, getd } from "./Action";
const axios = require("axios");

class Adminpage extends Component {
  constructor(props) {
    super(props);

    // this.onFileChange = this.onFileChange.bind(this);
    // this.updaterlogo = this.updaterlogo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      head: "",
      color: "",
      content: "",
      src: "",
      rating: "",
      price: "",
      rsrc: "",
      rtext: "",
      rlogo: "",
      rname: "",
      rcity: "",

      profileImg: "",
      first: "",

      redata: "",
      freshvalue: "",
      reduxvalue: {
        creationtime: "",
        count: ""
      },
      redvalue: "",

      referencee:""
    };
  }

  // onFileChange(e) {
  //   this.setState({ profileImg: e.target.files[0] });
  // }

  onSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("text", this.state.rtext);
    formData.append("name", this.state.rname);
    formData.append("src", this.state.rsrc);
    formData.append("city", this.state.rcity);
    formData.append("logo", this.state.rlogo);

    // console.log(this.state.profileImg);
    // debugger;
    console.log("SUBmit State value ==> ", this.state.freshvalue);
    axios.post("http://localhost:8081/imageee", formData, {}).then(res => {
      console.log(res);
    });

    this.gotoredux();
  }
  gotoredux() {
    //  console.log(date);
    //  var sub =  this.state.freshvalue[0].creationtime.substring(0,10);
    //  console.log("substring",sub)
    //  var dummydate = "2019-12-20";
    //  if(sub==dummydate)
    //  console.log("super")

    console.log("Length", this.state.freshvalue.length);
    //  this.state.freshvalue.map((data,li) => ({
    //   //  console.log("consoling",li)
    //    if (date==sub){
    // console.log("true")
    //  }}
    //  ))
    this.setState({ referencee: this.props.new }, () => {
      console.log("State referencee value", this.state.referencee);
      this.newfunction()
    });
  }
    newfunction(){

      var today = new Date();
      var date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
        let ref = -1;
   console.log(this.state.referencee.data)
    console.log(this.state.referencee.data.length,"LLENGTH")
    for (let i = 0; i < this.state.referencee.data.length; i++) {
      console.log(this.state.referencee.data[i].creationtime.substring(0, 10));
      console.log(date);

      if (date == this.state.referencee.data[i].creationtime.substring(0, 10)) {
        ref = i;
        console.log("yes");
        console.log(ref);
console.log(date,"=",this.state.referencee.data[i].creationtime.substring(0,10))



      } else {
        console.log("no");
      }
    }

    this.setState({ reduxvalue: ref });
    var arr = [];
    arr.push(ref);
    arr.push(date);
    // console.log("reduxvalue",arr)
    if (ref > -1) {
      this.props.getda(ref);
    } else {
      ref = ref + 2;
      var text = this.state.reduxvalue;
      text.count = ref.toString();
      text.creationtime = date;

      this.setState({
        reduxvalue: {
          count: ref,
          creationtime: date
        }
      });

      // this.setState({freshvalue:[...this.state.freshvalue,{
      //   'count':ref,
      //   'creationtime':date

      // }]});
      // debugger
      console.log("before assigning", this.props.new);
      this.setState({ freshvalue: this.props.new }, () => {
        console.log("State Current Value", this.state.freshvalue);
      });

      // console.log("freshvalueeeeeeeeeee",this.state.freshvalue)
      console.log("reduxxxxxxxxvalueeee", this.state.reduxvalue);
      this.props.getd(this.state.reduxvalue);
    }
    this.dynamic();
  }

  updateInput = event => {
    this.setState({ color: event.target.value });
  };

  updateIm = event => {
    this.setState({ head: event.target.value });
  };
  updatecon = event => {
    this.setState({ content: event.target.value });
  };

  updaterating = event => {
    this.setState({ rating: event.target.value });
  };

  updateprice = event => {
    this.setState({ price: event.target.value });
  };
  updatesrc = event => {
    this.setState({ src: event.target.value });
  };
  updatersrc = event => {
    this.setState({ rsrc: event.target.files[0] });
  };
  updatertext = event => {
    this.setState({ rtext: event.target.value });
  };
  updaterlogo = event => {
    this.setState({ rlogo: event.target.files[0] });
  };

  // updaterlogo(e) {
  //   this.setState({rlogo: e.target.files[0] });
  // }

  updatername = event => {
    this.setState({ rname: event.target.value });
  };
  updatercity = event => {
    this.setState({ rcity: event.target.value });
  };
  dynamic = () => {
    console.log("freshvalue");
    axios.post("http://localhost:8081/barchart").then(res => {
      console.log(res.data);

      this.setState({ freshvalue: res.data });
      console.log("freshvalue", this.state.freshvalue);
    });
  };
  getredux = () => {
    this.props.getdat(this.state.freshvalue);
  };

  submitre = () => {
    axios.post("http://localhost:8081/add", {
      color: this.state.color,
      head: this.state.head,
      content: this.state.content,
      src: this.state.src,
      price: this.state.price,
      rating: this.state.rating
    });
  };
  // updatingfirst = () =>{
  //   this.setState({first: formData})
  // }

  // submitr = () => {
  //   axios.post("http://localhost:8081/addreview", {
  //     rsrc: this.state.rsrc,
  //     rtext: this.state.rtext,
  //     rlogo: this.state.rlogo,
  //     rcity: this.state.rcity,
  //     rname: this.state.rname
  //   });
  // };

  componentDidMount() {
    axios.post("http://localhost:8081/barchart").then(res => {
      console.log("Response Data",res.data);

      this.setState({ freshvalue: res.data });
      console.log("freshvalue", this.state.freshvalue);
      console.log("before redux", this.state.freshvalue);

      this.getredux();

      //this.getarray()
    });
  }

  render() {
    return (
      <div className="admi">
        {/* file upload */}
        <div className="container" style={{ margin: "3%" }}>
          <div className="row" style={{ width: "100%" }}>
            <form onSubmit={this.onSubmit} enctype="multipart/form-data">
              <div className="r1">
                <div className="cc1">
                  <h3 style={{ marginTop: "20px" }}>SRC:</h3>

                  <input
                    style={{
                      width: "80%",
                      padding: "2%",
                      borderRadius: "10px",
                      marginTop: "15px",
                      marginLeft: "20px"
                    }}
                    type="file"
                    placeholder="SRC"
                    value={this.rsrc}
                    onChange={this.updatersrc}
                  />
                  {/* <Formimage /> */}

                  <h3 style={{ marginTop: "20px" }}> TEXT: </h3>
                  <input
                    style={{
                      width: "80%",
                      padding: "2%",
                      borderRadius: "10px",
                      marginTop: "15px",
                      marginLeft: "20px"
                    }}
                    type="text"
                    placeholder="Text"
                    value={this.state.rtext}
                    onChange={this.updatertext}
                  />

                  <h3 style={{ marginTop: "20px" }}> USER PROFILE: </h3>
                  <input
                    style={{
                      width: "80%",
                      padding: "2%",
                      borderRadius: "10px",
                      marginTop: "15px",
                      marginLeft: "20px"
                    }}
                    type="file"
                    placeholder="LOGO"
                    value={this.rlogo}
                    onChange={this.updaterlogo}
                  />
                </div>

                <div className="cc2">
                  <h3 style={{ marginTop: "20px" }}> NAME:</h3>
                  <input
                    style={{
                      width: "80%",
                      padding: "2%",
                      borderRadius: "10px",
                      marginTop: "15px",
                      marginLeft: "20px"
                    }}
                    type="text"
                    placeholder="Name"
                    value={this.state.rname}
                    onChange={this.updatername}
                  />

                  <h3 style={{ marginTop: "20px" }}> CITY: </h3>
                  <input
                    style={{
                      width: "80%",
                      padding: "2%",
                      borderRadius: "10px",
                      marginTop: "15px",
                      marginLeft: "20px"
                    }}
                    type="text"
                    placeholder="City"
                    value={this.state.rcity}
                    onChange={this.updatercity}
                  />
                </div>
              </div>
              <br />

              <div className="form-group">
                <button className="btn btn-primary" type="submit">
                  submit
                </button>
                {/* {console.log("redux",this.props.getdat())} */}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
// const mapStateToProps = state => {
//   console.log(state);
//   return {};
// };
const mapDispatchToProps = dispatch => {
  return {
    getdat: e => dispatch(getdat(e)),
    getda: b => dispatch(getda(b)),
    getd: b => dispatch(getd(b))
  };
};

const mapStateToProps = state => {
  // console.log( "hai",state);
  return {
    new: state
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Adminpage);


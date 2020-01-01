import React, { Component } from "react";
import Admincontainer from "./Admincontainer";
import Handler from "./Handler";
import Adminpage from "./Adminpage";
const axios = require("axios");

class Formimage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profileImg", this.state.profileImg);

    this.setState({ form: formData });
    // console.log(this.state.profileImg);
    // axios.post("http://localhost:8081/imageee", formData, {}).then(res => {
    //   console.log(res);

    // this.props.setting({this.setState({first:formData})})
    // });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <form onSubmit={this.onSubmit} accept="image/*">
              <div className="form-group">
                <input
                  type="file"
                  accept="image/*"
                  onChange={this.onFileChange}
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary" type="submit">
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Formimage;

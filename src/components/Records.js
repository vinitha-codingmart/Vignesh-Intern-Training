import React, { Component } from "react";
import Pagination from "react-js-pagination";

import "./Record.css";
const axios = require("axios");
// require("bootstrap/less/bootstrap.less");
class Records extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: "",
      tablerec: [],

      activePage: 1
    };

    this.handletable = this.handletable.bind(this);
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  handletable(e) {
    console.log("first");
    console.log(this.state.table);
    var a = e.target.value;
    this.setState({ table: a });




    console.log("for server", this.state.table, "haiii");

    axios
      .post("http://localhost:8081/table", {
        "tablename": e.target.value,
      })
      .then(res => {
        const nd = res.data;
        this.setState({ tablerec: nd });
        // console.log(this.state.style);

        // console.log(this.state.newdata);
        // console.log(this.state.newdata[0].id);
      });

  }

 
  componentDidMount() {


    console.log("called did")
    console.log("hai");
    axios
      .post("http://localhost:8081/table", {
        "tablename": this.state.table
      })
      .then(res => {
        const nd = res.data;
        this.setState({ tablerec: nd });
        // console.log(this.state.style);

        // console.log(this.state.newdata);
        // console.log(this.state.newdata[0].id);
      });
  }


  // componentWillUpdate() {
  //   console.log("for server", this.state.table, "haiii");

  //   axios
  //     .post("http://localhost:8081/table", {
  //       tablename: this.state.table
  //     })
  //     .then(res => {
  //       const nd = res.data;
  //       this.setState({ tablerec: nd });
  //       // console.log(this.state.style);

  //       // console.log(this.state.newdata);
  //       // console.log(this.state.newdata[0].id);
  //     });
  // }


  render() {
    // console.log(this.state.table);
    axios
    .post("http://localhost:8081/table", {
      "tablename": this.state.table
    })

    .then(res => {
      const nd = res.data;
      this.setState({ tablerec: nd });
      // console.log(this.state.style);

      // console.log(this.state.newdata);
      // console.log(this.state.newdata[0].id);
    });

// console.log(this.props.tablename)
    if(this.state.table=="hotelco"){

    return (
      <div>
      
        {this.state.tablerec.map(data => (
          //   console.log(<img className = "hi" src={`data:image/jpeg;base64,${this.props.src}`}/>),
          <table
            style={{
              width: "80%",
              tableLayout: "auto",
              border: "1px solid black",
              borderCollapse: "collapse",
              margin: "1%"
            }}
          >
            <tr>
              <td style={{ border: "1px solid black", width: "150px" }}>
                {data.color}
              </td>
              <td style={{ border: "1px solid black", width: "100px" }}>
                {data.contents}
              </td>
              <td style={{ border: "1px solid black", width: "100px" }}>
                {" "}
                <img
                  style={{ width: "200px" }}
                  src={`data:image/jpeg;base64,${data.src}`}
                />
              </td>
              <td style={{ border: "1px solid black", width: "100px" }}>
                {data.head}{" "}
              </td>
              <td style={{ border: "1px solid black", width: "100px" }}>
                {" "}
                {data.content}
              </td>
              <td style={{ border: "1px solid black", width: "100px" }}>
                {" "}
                {data.price}
              </td>
              <td style={{ border: "1px solid black", width: "100px" }}>
                {data.rating}{" "}
              </td>
            </tr>
          </table>
        ))}
        <div>
          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={2}
            totalItemsCount={4}
            pageRangeDisplayed={2}
            onChange={this.handlePageChange}
          />
        </div>
      
      </div>
    
    );
          }
          else if(this.state.tablerec.name!=""){

            return(
              <div>
                </div>
            );



          }
          else{
            return(
            <div>
              <h1>table not</h1>
              </div>
            );
          }
  }
}

export default Records;

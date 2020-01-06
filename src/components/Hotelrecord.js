import React, { Component } from "react";
import Barchart from "./Barchart";
import Adminpage from "./Adminpage";
import './Hotelrecord.css'
const axios = require("axios");

class Hotelrecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tablenam: "hotelco",
      tablerec: [],
      message: "not at bottom",
      value: 2,
      loading: "true",
      prevvalue:""
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  callfun() {
    this.setState({ loading: "false" });
    setTimeout(() => {
      this.setState({ loading: "true" });
    }, 1000);
    console.log("hai");
    var a = this.state.value;
    var a = a + 1;
    this.setState({ value: a });
    console.log(a);
console.log(this.state.loading)
    // if (this.state.loading ==="true"){

      console.log("haiiiiiiiiiii")
      axios
        .post("http://localhost:8081/table", {
          tablename: this.state.tablenam,
          value: this.state.value
        })
        .then(res => {
          const nd = res.data;
          this.setState({ tablerec: nd });

          // window.addEventListener("scroll", this.onScroll, false);
          // window.addEventListener("scroll", this.handleScroll);

          console.log(this.state.tablerec, "tablerecordsssss");
        });
      // }
  }

  handleScroll() {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
  
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom=== body.scrollHeight) {

      console.log(windowBottom,"heeiiiiiii",body.scrollHeight)

      console.log("yessssss");
      this.setState({
        message: "bottom reached"
      });
      if(this.state.prevvalue!=this.state.message)
       var b = this.state.message
      this.callfun();
      this.setState({prevvalue:b})
    } else {
      // console.log("noooo");
      this.setState({
        message: "not at bottom"
      });
    }
  }

  //     componentWillUnmount() {
  //       window.removeEventListener("scroll", this.onScroll, false);
  //     }

  //     onScroll = () => {
  //       if (this.hasReachedBottom()) {
  //         this.hasReachedBottom();
  //       }
  //     };

  //     hasReachedBottom() {

  // console.log(document.body.offsetHeight ,"heightttttt")
  //     //  console.log( document.body.scrollTop,"topppppppppppp")
  //     //   console.log(document.body.scrollHeight)
  //     //   return (
  //         if(document.body.offsetHeight + document.body.scrollTop ===
  //           document.body.scrollHeight){
  //             console.log("bottom")
  //           }

  //         // );
  //     }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  componentDidMount() {
    axios
      .post("http://localhost:8081/table", {
        tablename: this.state.tablenam,
        value: 2
      })
      .then(res => {
        const nd = res.data;
        this.setState({ tablerec: nd });

        // window.addEventListener("scroll", this.onScroll, false);
        window.addEventListener("scroll", this.handleScroll);

        console.log(this.state.tablerec, "tablerecordsssss");
      });
  }
  render() {
    if (this.state.loading == "false") {
      return (
        <div class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      );
    } else {
      return (
        <div>
          {this.state.tablerec.map(data => (
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
                  <img style={{ width: "200px" }} src={`/Image/${data.src}`} />
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

          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          
          
          

          <Barchart />
        
          <div style={{ display: "none" }}>
            {" "}
            <Adminpage />
          </div>
          <div className="fixedDiv">{this.state.message}</div>
        </div>
      );
    }
  }
}

export default Hotelrecord;

{
  /* <ScrollableElement onScroll={this.handleScroll}>
<OverflowingContent />
</ScrollableElement> */
}

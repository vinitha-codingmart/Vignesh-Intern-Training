import React, { Component } from 'react';
import Reviewerchart from './components/Reviewchart'
import './Reviewertable.css'

const axios = require("axios");
class Reviewertable extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tablenam:"reviewe",
            tablerec:[]   ,
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
      const docHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
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
  


    componentDidMount() {
        console.log("called did");
        console.log("hai");
        axios
          .post("http://localhost:8081/table", {
            tablename:this.state.tablenam,
            value:this.state.value
          })
          .then(res => {
            const nd = res.data;
            this.setState({ tablerec: nd });

            window.addEventListener("scroll", this.handleScroll);


            console.log(this.state.tablerec,"tablerecordsssss")
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
                  {data.text}
                </td>
               
                <td style={{ border: "1px solid black", width: "100px" }}>
                  
                  <img
                    style={{ width: "200px" }}
                    src={`/Image/${data.src}`}
                  />
                </td>

                <td style={{ border: "1px solid black", width: "100px" }}>
                  
                  <img
                    style={{ width: "200px" }}
                    src={`/Image/${data.logo}`}
                  />
                </td>
                <td style={{ border: "1px solid black", width: "100px" }}>
                  {data.name}{" "}
                </td>
                <td style={{ border: "1px solid black", width: "100px" }}>
                  {" "}
                  {data.city}
                </td>
               
              </tr>
            </table>
          ))}
          <Reviewerchart/>
        </div> );
    }}
}
 
export default Reviewertable;
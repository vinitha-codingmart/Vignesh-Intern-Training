import React, { Component } from 'react';
import './Mannualgraph.css'
import Graphline from "./GraphLine"
import Bartext from "./Bartext"
import Barbox from './Barbox'
const axios = require("axios");

class Manualgraph extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            contentss:[],
         }
    }
    componentDidMount(){
    //     axios.post("http://localhost:8081/count")
    
    //     .then(res => {
    //       const nd = res.data;
    //       this.setState({ count: nd });
    //    console.log(this.state.count);
    //     });
    // }
// displaybar(){
    axios.post("http://localhost:8081/barchart")
    
    .then(res => {
        console.log(res)
        console.log(res.data)
      const nd = res.data;
      console.log(nd);
      this.setState({ contentss: res.data });
   console.log("haiii",this.state.contentss[0]);
   
    });


}
displaybar(){

console.log("display",this.state.contentss);


return    this.state.contentss.map (go=>
    
        <Barbox percent = {go.count}/> 

      )
}

    
    displaylines(){
        return Array(8).fill(null).map((el,i)=>(
            // console.log("hai"),
            <div className="garphlin">
            <Graphline left={i*10}/>
            </div>
        ))
    }
    render() { 
        return ( 
            <div className = "graph">
                <div className ="grap">
                      <Bartext/>

                 <div className="linegraph">
                    {this.displaylines()}
                   
                    {this.displaybar()}
                        </div>



                        {/* {this.displaybar()} */}
                    </div>



                </div>
         );
    }
}
 
export default Manualgraph;
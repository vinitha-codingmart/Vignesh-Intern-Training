import React, { Component } from 'react';
const axios = require("axios")
class Mb extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          
            
         }
      

}
submi=()=>{
    // var ur = `{this.state.url} -${this.props.funct}`
    // console.log(ur)

console.log(this.props.text2)

    axios.post("http://localhost:8081/"+this.props.funct, 
    {
"primary" : this.props.primary,
"text" :this.props.text,
"where":this.props.where,
"text2":this.props.text2,
                 
   });


    }
    render() { 
        return (
            <div>
<button onClick={this.submi} style = {{height:"30px" ,width:"150px",marginTop:"30px",borderRadius:"20px",marginLeft:"400px"}}> modify</button>

                </div>
          );
    }
}
 
export default Mb;
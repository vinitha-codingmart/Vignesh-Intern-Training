import React, { Component } from 'react';
class Policy1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
           <div style={{width:"25%"}}>
                <h5 style={{fontSize:"18px",color:"#484848"}}>{this.props.head}</h5>
                <p style = {{ fontSize:"16px",marginTop:"14px" ,color:"#7A7B7F"}}> {this.props.line1}</p>
                <p style = {{ fontSize:"16px",marginTop:"8px",color:"#7A7B7F"}}> {this.props.line2}</p>
                <p style = {{ fontSize:"16px",marginTop:"8px",color:"#7A7B7F"}}> {this.props.line3}</p>
                <p style = {{  fontSize:"16px",marginTop:"8px",color:"#7A7B7F"}}> {this.props.line4}</p>
                <p style = {{  fontSize:"16px",marginTop:"8px",color:"#7A7B7F"}}> {this.props.line5}</p>
                <p style = {{   fontSize:"16px",marginTop:"8px",color:"#7A7B7F"}}> {this.props.line6}</p>

            </div> 
          );
    }
}
 
export default Policy1;

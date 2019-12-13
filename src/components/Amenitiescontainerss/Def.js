import React, { Component } from 'react';
class Def extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <h4 style = {{marginTop:"20px",color:"#474A53"}}>{this.props.head}</h4>
                <p style = {{fontSize:"15px",marginRight:"10px",color:"#484848" ,marginTop:"10px",lineHeight:1.3}}>{this.props.content}</p>
                </div>
        );
    }
}
 
export default Def;
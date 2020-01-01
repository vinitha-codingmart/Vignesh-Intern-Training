import React, { Component } from 'react';
import './Line.css'
class Graphline extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

     Line=()=>{
         console.log(this.props.left)
            return (
                 <div className = "line" style={{left:`${this.props.left}%`}}/>
            );
        }
    render() { 
        return(
            <div>
                {this.Line()}
                </div>
        )
      
    }
}
 
export default Graphline;
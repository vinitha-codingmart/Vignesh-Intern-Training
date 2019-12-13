import React, { Component } from 'react';
import Star from '../Star/Star'
import './Gridflex.css'
class  Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className = "c1">
                    <img className = "g1" src={this.props.src}/>
                    <Star  size = "140%"/>
                    <br/>
                    
                    <p style ={{fontSize:"14px",marginTop : "28px",color:"#6F595A"}}>{this.props.text} </p>
                         <div className="logo">
                            <img className = "im" src={this.props.logo}/>
                    
                               <p style = {{marginTop:"12px",marginLeft:"15px"}}>{this.props.name}<br/>
                                {this.props.city}</p>
                        </div>
            </div>
                

        );
    }
}
 
export default Grid ;
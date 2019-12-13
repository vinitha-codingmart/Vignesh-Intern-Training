import React, { Component } from 'react';
// import Hotelfooter from './Traveller';
import './Hotel.css';
import Star from '../Star/Star';
class Hotel extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <img className = "hi" src={this.props.img}/>
                <p style={{color:this.props.color}}>{this.props.head}</p>
                <p style={{fontSize:"18px" ,marginRigth:"0px" ,lineHeight:1.2}}>{this.props.content}</p>
                <p style={{marginTop:"5px"}}>{this.props.price}</p>
                <p style = {{marginTop:"5px" ,fontSize:"14px"}}><Star size = "15px"/>{this.props.rating} </p>
            </div>
          );
    }
}
 
export default Hotel;
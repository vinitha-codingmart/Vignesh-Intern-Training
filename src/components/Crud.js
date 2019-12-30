import React, { Component } from 'react';
import Tex from './Text'
// import Mb from './Mb';
class Crud extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
            selectValue:"hotelname",
            sel:"delete",
            updat:"",
         
         }



         this.handleDropdownChange = this.handleDropdownChange.bind(this);
         this.handleDropdown = this.handleDropdown.bind(this);
    // this.handleDropdownChange = this.handleDropdownChange.bind
  }
  updat=(event)=> {
    this. setState({updat:event.target.value});
 }
 
  handleDropdownChange(e) {
    this.setState({ selectValue: e.target.value });
  }
 
  handleDropdown(e) {
    this.setState({ sel: e.target.value });
    // this.forceUpdate();
  }

    render() { 
        return ( 


            <div>
            <div>
            <select id="dropdown" onChange={this.handleDropdownChange}>
              <option value="hotelName">HotelName</option>
              <option value="id">ID</option>
            </select>
          </div>
          <input type="text"    value = {this.state.updat}  onChange={this.updat} />

         <div>
            <select id="dropdown" onChange={this.handleDropdown}>
              <option value="Delete">Delete</option>
              <option value="Update">Update</option>
            </select>


            
          </div>
         <Tex validate = {this.state.sel} primary ={this.state.selectValue}  where = {this.state.updat}  />
{/* <Mb primary = /> */}
          </div>
         );
    }
}
 
export default Crud;
 import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import DatePicker from 'react-datepicker';
import './Search.css';
import "react-datepicker/dist/react-datepicker.css";
import 'react-dropdown/style.css'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            startDate: new Date(),
            endDate: new Date()
         }
    }
    starthandleChange = date => {
        this.setState({
          startDate: date
        });
      };
      endhandleChange = date => {
        this.setState({
          startDate: date
        });
      };
            
    render(){
      var adults = ['1 adult','2 adult','3 adult','4 adult','5 adult','6 adult','7 adult','8 adult','9 adult','10 adult','11 adult','12 adult','13 adult','14 adult','15 adult'];
      var child = ['0child','1child','2child','3child','4child','5child'];
      const defaultOption = adults[0];
      
        return ( 
          <div className = "h">
                       <h1 style={{fontSize:"35px"}}>Book Homes,Hotel,and
                       more on airbnb</h1>
                        <p style ={{fontSize:"12px",marginTop:"15px"}}>WHERE</p>
                       <input type="text"name="where" value="Anywhere" style ={{fontSize:"16px",marginTop:"10px", padding:"10px", width:"93%"}}/>
              
            <div className= "row">
              <div className = "col1">
                      <h6 style ={{fontSize:"15px",marginTop:"10px"}}>CHECK-IN</h6>
                      <DatePicker className = "ci"
                      selected={this.state.startDate}
                        onChange={this.starthandleChange} //only when value has changed
                             />
                           <h6 style ={{fontSize:"16px",marginTop:"10%"}}>ADULT</h6>
                          <Dropdown className="adult" options={adults} value={defaultOption} />     
                 </div>
                 <div className = "col2">
                   <h6 style ={{fontSize:"15px",marginTop:"10px"}}>CHECK-OUT</h6>       
                     <DatePicker className = "co"
                      selected={this.state.endDate}
                         onChange={this.endhandleChange} //only when value has changed
                       />
                     <h6 style ={{fontSize:"16px",marginTop:"10%"}}>CHILD</h6>
                     <Dropdown className = "ch" options={child} value = {child[0]}/> 
              
              
     
                 </div>
               </div>  
          
                   
           <button  className = "bu">Search</button> 
          </div>
  
         
         );
}
}
 
export default Search;
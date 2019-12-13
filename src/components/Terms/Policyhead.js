import React, { Component } from 'react';
import './Policyhead.css'
import Policy1 from './Policy1'
import Policy2 from './policy2'
import Policy3 from './Policy3'
class Policyhead extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
                 <div className = "fo">
                    <Policy1  head=" Airbnb" line1="Careers" line2="News" line3="Policies" line4="Help" line5="Diversity & Belonging" line6=""  />

                   <Policy2  head=" Discover" line1="Trust & Safety" line2="Travel Credit" line3="Airbnb Citizen" line4="Business Travel" line5="Things To Do" line6="Airbnbmag"  />


                   <Policy2  head=" Hosting" line1="Why Host" line2="hospitality" line3="responsible hosting" line4="community centre" line5="host an Experience" line6="open Homes"  />
                    <Policy3/>
                 </div>

         );
    }
}
 
export default Policyhead;
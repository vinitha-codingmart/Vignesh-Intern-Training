import React, { Component } from 'react';
import './Policyhead.css'
import Policy1 from './Policy1'
// import Policy2 from './policy2'
import Policy3 from './Policy3'
class Policyhead extends Component {
    constructor(props) {
        super(props);
        this.state = {

pos:[
    
    {
head : ' Airbnb',
line1:'Careers',
line2:'News',
line3:'Policies',
line4:'Help',
line5:'Diversity & Belonging',
line6:'',
display:'none'

    },



    {
        head : 'Discover',
        line1:'Trust & Safety',
        line2:'Travel Credit',
        line3:'Airbnb Citizen',
        line4:'Business Travel',
        line5:'hings To Do',
        line6:'Airbnbmag',
        display:''
        
            },




            {
                head :' Hosting',
                line1:'Why Host',
                line2:'hospitality',
                line3:'responsible hosting',
                line4:'community centre',
                line5:'host an Experience',
                line6:'open Homes',
                display:''
                
                    },
                
        

]


          }
    }
    render() { 
        return ( 
                 <div className = "fo">
                     {this.state.pos.map(data=>
                    <Policy1  head={data.head} line1={data.line1} line2={data.line2} line3={data.line3} line4={data.line4} line5={data.line5} line6={data.line6} display={data.display} />
                    )}
                    <Policy3/>
                 </div>

         );
    }
}
 
export default Policyhead;
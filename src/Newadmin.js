import React, { Component } from 'react';
import './Newadmin.css'
import Decoration from './Decoration1'
import Decoration2 from './Decoration2'
import Adminpage from './components/Adminpage'
// import Navbar from './Navbar'
class Newadmin extends Component {
    constructor(props) {
        super(props);
        this.state = { 






         }
    }
    render() { 
        return (
            <div className="newadmin">
                
                   < div className = "ad">
                      <div className = "columnn1">
                        <div className = "nnnnnnnnnn">
                         < Adminpage/>
                              </div>








                        
                        </div>                    
                        <div className = "columnn2">
                          


                          
                     <div className = "Topright">
                            <Decoration/>
                              </div>

                       <div className = "textdesign">


                      <h1> Airbnb</h1>


                         </div>
                              <div className="decoration2">
                              <Decoration2/>
                              </div>

                       </div>
                    </div>
                    
                </div>
          );
    }
}
 
export default Newadmin;

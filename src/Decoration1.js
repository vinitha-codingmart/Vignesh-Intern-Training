import React, { Component } from 'react';
class Decoration1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                 <div className="decoration" style={{
                    
                 }}>
                          <div className="firstLine"
                          style={{
                            height:"20px",
                            width :"59px",
                            backgroundColor:"#F86B6A",
                            borderRadius:"8px",
                         

                            

                          }}/>

                            <div className="secondline"
                              style={{
                                  display:"flex",
                              }}>
                              <div className = "secondline1"
                               style={{
                                height:"13px",
                                width :"44px",
                                backgroundColor:"#B281EC",
                                borderRadius:"7px",
                                marginTop:"8px",  
                                marginLeft:"-13px"
                                 }}/>
                                 <div className="secondline2"
                                 style={{
                                  height:"10px",
                                  width :"45px",
                                  backgroundColor:"#3D9EB8",
                                  marginLeft:"12px",
                                  borderRadius:"5px",
                                  marginTop:"9px",
                                   }}
                                 />
                                  
                              
                            </div>
                            <div className="thirdline"
                              style={{
                                display:"flex",
                              }}>
                                <div className = "thirdline1"
                                  style={{
                                  height:"8px",
                                  width :"40px",
                                  backgroundColor:"#3D9EB8",
                                  borderRadius:"5px",
                                  marginTop:"8px",
                                  marginLeft:"-40px"
                                   }}/>
                                <div className="thirdline2"
                                  style={{
                                    height:"17px",
                                    width :"90px",
                                    backgroundColor:"#F86B6A",
                                    borderRadius:"8px",
                                    marginTop:"5px",
                                    marginLeft:"17px"
                                     }}/>
  



                            

                            </div>
                           <  div className="Lastline"
                                style={{
                                  height:"6px",
                                  width :"130px",
                                  backgroundColor:"#B281EC",
                                  borderRadius:"8px",
                                  marginTop:"5px",
                                  marginLeft:"-60px"
                            
                                }}>



                             </div>

                             </div>








                </div>
         );
    }
}
 
export default Decoration1;
import React, { Component } from 'react';
class Decoration2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className = "Decoration2">
                   
                        
                        
                           <  div className="Lastline2"
                                style={{
                                  height:"6px",
                                  width :"130px",
                                  backgroundColor:"#B281EC",
                                  borderRadius:"8px",
                                
                                  marginLeft:"-60px"
                            
                                }}>

                             


                             </div>
                             <div className="thirdline2"
                              style={{
                                display:"flex",
                                // marginLeft:"50px"
                              }}>
                                <div className = "thirdline12"
                                  style={{
                                  height:"8px",
                                  width :"40px",
                                  backgroundColor:"#3D9EB8",
                                  borderRadius:"5px",
                                  marginTop:"8px",
                                  marginLeft:"-40px"
                                   }}/>
                                <div className="thirdline22"
                                  style={{
                                    height:"17px",
                                    width :"90px",
                                    backgroundColor:"#F86B6A",
                                    borderRadius:"8px",
                                    marginTop:"5px",
                                    marginLeft:"17px"
                                     }}/>
  



                            

                            </div>


    <div className="secondline2"
                              style={{
                                  display:"flex",
                                //   marginLeft:"90px"
                              }}>
                              <div className = "secondline12"
                               style={{
                                height:"13px",
                                width :"44px",
                                backgroundColor:"#B281EC",
                                borderRadius:"7px",
                                marginTop:"8px",  
                                // marginLeft:"px"
                                marginLeft:"-13px"
                                 }}/>
                                 <div className="secondline22"
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


                            <div className="firstLine2"
                          style={{
                            height:"20px",
                            width :"59px",
                            backgroundColor:"#F86B6A",
                            borderRadius:"8px",
                            // marginTop:"-130px",
                            // marginLeft:"-20px"
                            marginTop:"5px",
                            

                          }}/>


            </div>
         );
    }
}
 
export default Decoration2;
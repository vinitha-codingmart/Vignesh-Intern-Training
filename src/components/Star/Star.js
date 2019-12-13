import React, { Component } from 'react';
import './Star.css'
class Def extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <div class="rate">
                      <input type="radio" id="star5" name="rate" value="5" />
                        <label for="star5" title="text" style={{fontSize:this.props.size}}>5 stars</label>
                         <input type="radio" id="star4" name="rate" value="4" />
                           <label for="star4" title="text"  style={{fontSize:this.props.size}} >4 stars</label>
                            <input type="radio" id="star3" name="rate" value="3" />
                              <label for="star3" title="text" style={{fontSize:this.props.size}}>3 stars</label>
                                <input type="radio" id="star2" name="rate" value="2" />
                                  <label for="star2" title="text" style={{fontSize:this.props.size}}>2 stars</label>
                                    <input type="radio" id="star1" name="rate" value="1" />
                                      <label for="star1" title="text"  style={{fontSize:this.props.size}}>1 star</label>
                </div>
            </div>
        );
    }
}
 
export default Def;
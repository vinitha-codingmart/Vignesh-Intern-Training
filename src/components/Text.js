import React, { Component } from 'react';
import Mb from './Mb'
class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
            updating:"",
            updatin:"",
          }
        }
          updating=(event)=> {
            this. setState({updating:event.target.value})
         }
         updatin=(event)=> {
            this. setState({updatin:event.target.value})
         }
           
    
    render() {
        // console.log(this.props.funct); 
        if(this.props.validate==="Update"){
            
            



        return ( <div>
            <input type="text"    value = {this.state.updating}  onChange={this.updating} />
            <br/>
            <input type="text"    value = {this.state.updatin}  onChange={this.updatin} />
            <Mb   funct = {this.props.validate} primary = {this.props.primary} text = {this.state.updating} where = {this.props.where} text2 = {this.state.updatin}/>
            </div> );
        }else{
            return(
                <div>
                     <Mb   funct = {this.props.validate} primary = {this.props.primary} text = {this.state.updating} where = {this.props.where} text2 = {this.state.updatin}/>
                    </div>
            );
        }
    }
}
 
export default Text;
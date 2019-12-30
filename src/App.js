import React,{Component} from 'react';
import { Link,Route ,Switch} from 'react-router-dom';
import{BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import main from './Main';
// import Gridc from './components/Gridcontainer/Gridcontainer' 
// // import Dropdown from './components/dropdown'
// import Search from './components/search/Search'
// import G2 from './components/Gridcontainer/G2'
// // import Home from './components/Home'
// import Amenitiescontainer from './components/Amenitiescontainerss/Amenitiescontainer';
// import Hotelcontainer from './components/Hotel/Hotelcontainer';
// import Traveller from './components/traveller/Traveller';
// import Policyhead from './components/Terms/Policyhead';
// import Footer from './components/footer/Footer';
import admin from './components/Admincontainer';
import record from './components/RecordContainer'
// import Adminpage from './components/Adminpage';
class App extends Component {
  constructor(props) {
      super(props);
      this.state = { 
       

       }
  }
  


render(){
  


return (

  <div className="App">
       
  {/* <div className = "first"> */}
    {/* <Router>
     



     
    */}
         
        
<Router>

<Route path='/' component={main}exact/>
<Route path='/admin' component={admin} exact/>
<Route path = '/record' component = {record}exact/>
   <Switch>
    {/* <Link to ='/admin' exact ><span>admin</span></Link> */}
</Switch>  
</Router>
          

{/*        
           <div className = "f"> 
              <Search></Search>
           </div>
  </div>
            <br/>
  <div className = "def">
           <h1>What guests are saying about homes in India</h1><br/>
            <h3 >India homes were rated 4.6 out of 5 stars with 510,000+ reviews</h3>
                <div className = "gr">
                <Gridc></Gridc>
                
                   </div>
           <G2></G2>
               <div className = "gr">
 
                  <Amenitiescontainer/>
   
              </div> 
         <hr style = {{color:"#484848",marginTop:"35px"}}></hr>  


              <div className = "gr">
                 < Hotelcontainer/>
                   <p style  = {{color:"#15B2D6",fontSize:"20px"}}>Show all (600+) ></p>
                     <Traveller />
                       <Policyhead/>
                         <Footer/>
                </div>
        </div> */}

    </div>
  );
}
}

export default App;

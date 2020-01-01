import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import main from "./Main";
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
import admin from "./components/Admincontainer";
import record from "./components/RecordContainer";
// import Adminpage from './components/Adminpage';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        
        <Router>
          <Route path="/" component={main} exact />
          <Route path="/admin" component={admin} exact />
          <Route path="/record" component={record} exact />
          <Switch>
          </Switch>
        </Router>

      
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Hotel from './Hotel'
import './Hotelcontainer.css'
class Hotelcontainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className = "ho">
                <Hotel color="#341E13" img="https://a0.muscache.com/im/pictures/14a89f9b-4a41-4c8b-949a-59e92a4429a4.jpg?aki_policy=large"  head="ARPORA" content="The Woodstone Crib & Pool Jacuzzi avec breakfast"  price="₹3,196/night" rating = "258.Superhost" />

                <Hotel color="#87663D" img="https://a0.muscache.com/im/pictures/24509164/1bf6f65d_original.jpg?aki_policy=large"  head="KOCHI" content="Sea Hut Homestay with Aircon.."  price="₹2,983/night" rating = "231"/>

                <Hotel color="#A52C21" img="https://a0.muscache.com/im/pictures/1dcf5ed0-1db1-4ba9-b2d8-4e90ac71c3b4.jpg?aki_policy=large"  head="ARPORA" content="Lux 3 Bedroom Suite Pool&Jacuzzi with BF"  price="₹1,207/night" rating = "266.Superhost"/>

                <Hotel color="#15295E" img="https://a0.muscache.com/im/pictures/79e6eb3c-5c6d-4d98-bc61-dd6045777f51.jpg?aki_policy=large"  head="OOTY" content="Bilberry Cottage at Stumpfields"  price="₹3,480/night" rating = "200.superhost"/>


          </div>
          );
    }
}
 
export default Hotelcontainer;
import React, { Component } from 'react';
import Slider from "react-slick";
import Grid from './Grid'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Grid.css';
const axios = require("axios");
class Gridcontainer extends Component {
    constructor(props) {
        super(props);
        this.state = {



            gdata:[]
//                 {
//                     src:'https://a0.muscache.com/im/pictures/c58a62f5-6541-49ec-92e4-2b5c0bce2bf2.jpg?aki_policy=large',
//                     text:'Staying at Ritas home was like being with family. There is nothing you cant ask - we felt more than comfortable! We enjoyed the meals',
//                     logo:'https://a0.muscache.com/im/pictures/user/1fd0bbaf-5de0-4a91-8305-62d51246d5b3.jpg?aki_policy=large',
//                     name:'Marius',
//                     city:'Germany',



//             },




//             {
//                 src:'https://a0.muscache.com/im/pictures/7479971/03114085_original.jpg?aki_policy=large',
//                 text:'Look no further--this is the place to stay in Delhi. Nalins apartment has every convenience you could hope for, including cooking utensils  ',
//                 logo:'https://a0.muscache.com/im/users/657543/profile_pic/1388043000/original.jpg?aki_policy=large',
//                 name:'Georgina',
//                 city:'Australia',



//         },





//         {
//             src:'https://a0.muscache.com/im/pictures/8650182/506aa978_original.jpg?aki_policy=large',
//             text:'Goagaga is one of the super awesome things i have come across in life.. Ginza is an awesome host and she is more awesome a person... The',
//             logo:'https://a0.muscache.com/im/pictures/user/aeffc056-87e3-4ad7-bdc5-78ecc5923908.jpg?aki_policy=large',
//             name:'Vidhi',
//             city:'India',


            
//      },
    
//     {
//         src:'https://a0.muscache.com/im/pictures/8650182/506aa978_original.jpg?aki_policy=large',
//         text:'Goagaga is one of the super awesome things i have come across in life.. Ginza is an awesome host and she is more awesome a person... The',
//         logo:'https://a0.muscache.com/im/pictures/user/aeffc056-87e3-4ad7-bdc5-78ecc5923908.jpg?aki_policy=large',
//         name:'Vidhi',
//         city:'India',


        
// }

//         ]


                     




           }
       }



    componentDidMount(){
        axios.get("http://localhost:8081/getreviwer")
          .then(res => {
            const nd = res.data;
            this.setState({ gdata:nd });
            console.log(this.state.gdata);
    
            // console.log(this.state.newdata);
            // console.log(this.state.newdata[0].id);
    
          })
    }
    
    render() { 


        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
          };
        return (
            <Slider {...settings}>
                { this.state.gdata.map(data =>
             <div className = "nnnnm">
                         <Grid src= {data.src} text={data.text} logo={data.logo} name ={data.name} city={data.city} />
                           
            </div>
                    )}
                    
                  
            </Slider>
          );
    }
}
 
export default Gridcontainer;
import React, { Component } from 'react';
import Grid from './Grid'

import './Grid.css';
class Gridcontainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
             <div className = "n">
                         <Grid src="https://a0.muscache.com/im/pictures/c58a62f5-6541-49ec-92e4-2b5c0bce2bf2.jpg?aki_policy=large" text=" Staying at Ritas home was like being with family. There is nothing you can't ask - we felt more than comfortable! We enjoyed the meals"  logo="https://a0.muscache.com/im/pictures/user/1fd0bbaf-5de0-4a91-8305-62d51246d5b3.jpg?aki_policy=large" name ="Marius" city="Germany" />
                         <Grid src="https://a0.muscache.com/im/pictures/7479971/03114085_original.jpg?aki_policy=large" text="Look no further--this is the place to stay in Delhi. Nalin's apartment has every convenience you could hope for, including cooking utensils  "  logo="https://a0.muscache.com/im/users/657543/profile_pic/1388043000/original.jpg?aki_policy=large"name ="Georgina    " city="Australia"/>
                         <Grid src="https://a0.muscache.com/im/pictures/8650182/506aa978_original.jpg?aki_policy=large" text=" Goagaga is one of the super awesome things i have come across in life.. Ginza is an awesome host and she is more awesome a person... The"  logo="https://a0.muscache.com/im/pictures/user/aeffc056-87e3-4ad7-bdc5-78ecc5923908.jpg?aki_policy=large"name ="Vidhi" city="India"/>

            </div>
          );
    }
}
 
export default Gridcontainer;
import React, { Component } from 'react'

import {Bar,Pie} from 'react-chartjs-2';


const axios = require("axios");



class  Barchart extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            datavalue:[],
            creationtime:"",
            countvalue:"",
            newdata:[],
            reviewdata:[],
            rctime:"",
            rccount:"",
            
         }
        
    }

getarray(){
    console.log("component did mount");
    
 var nd=[];
 var na =[];
    this.state.datavalue.map(data=>{
  nd.push(data.creationtime)
  na.push(data.count)
    }

    )
    this.setState({ creationtime:nd })
    this.setState({ countvalue:na })
    
    console.log("hello",this.state.creationtime)
    console.log("hellocount",this.state.countvalue)

  let mydata = {
        labels: this.state.creationtime,
        datasets: [
          {
            label: 'Week Dataset',
            // backgroundColor: 'rgba(255,99,132,0.2)',
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data:this.state.countvalue
          }
        ]
      };
      this.setState({ newdata:mydata })

      console.log("labels",mydata.labels)

      console.log("newdata",this.state.newdata)






      
}




 
//  mydata = {
//     labels: ['Sunday', 'Monday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
//     datasets: [
//       {
//         label: 'Week Dataset',
//         backgroundColor: 'rgba(255,99,132,0.2)',
//         borderColor: 'rgba(255,99,132,1)',
//         borderWidth: 1,
//         hoverBackgroundColor: 'rgba(255,99,132,0.4)',
//         hoverBorderColor: 'rgba(255,99,132,1)',
//         data: [65, 59, 80, 81, 56, 55, 40]
//       }
//     ]
//   };

    componentDidMount(){
    axios.post("http://localhost:8081/barchart")
        .then((res) => {
          console.log(res.data);
         
          this.setState({ datavalue:res.data })
          
    
          this.getarray()


    
})


 };
    render() { 	
       return (
<div>
<div style={{display:"flex"}}>
<div style = {{height:"300px" ,width:"30%"}}>
<Bar 
          data={this.state.newdata}
        //   width={10}
        //   height={50}
          options={{
            maintainAspectRatio: false
          }}
        />

</div>
<div style = {{height:"300px" ,width:"30%"}}>

 <Pie data={this.state.newdata} />
</div>
</div>
    </div>




          );
    }
}
 
export default Barchart;
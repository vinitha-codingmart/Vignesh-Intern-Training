import React, { Component } from 'react';


import {Bar,Pie} from 'react-chartjs-2';


const axios = require("axios");



class  Reviewchart extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           
            reviewdata:[],
            rctime:"",
            rccount:"",
            rcdata:[],
            
         }
        
    }

getarray(){
    console.log("component did mount");
    
 var nd=[];
 var na =[];
    this.state.reviewdata.map(data=>{
  nd.push(data.creationtime)
  na.push(data.count)
    }

    )
    this.setState({ rctime:nd })
    this.setState({ rccount:na })
    
    //console.log("hello",this.state.creationtime)
    //console.log("hellocount",this.state.countvalue)

  let mydatas= {
        labels: this.state.rctime,
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
            data:this.state.rccount
          }
        ]
      };
      this.setState({ rcdata:mydatas })

      //console.log("labels",mydata.labels)

      //console.log("newdata",this.state.newdata)






      
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
    axios.post("http://localhost:8081/reviewechart")
        .then((res) => {
          console.log(res.data);
         
          this.setState({ reviewdata:res.data })
          
    
          this.getarray()


    
})


 };
    render() { 	
       return (
<div style={{marginTop:"50px"}}>
<div style={{display:"flex"}}>
<div style = {{height:"300px" ,width:"30%"}}>
<Bar 
          data={this.state.rcdata}
        //   width={10}
        //   height={50}
          options={{
            maintainAspectRatio: false
          }}
        />

</div>
<div style = {{height:"300px" ,width:"30%"}}>

 <Pie data={this.state.rcdata} />
</div>
</div>
    </div>




          );
    }
}
 
export default Reviewchart;
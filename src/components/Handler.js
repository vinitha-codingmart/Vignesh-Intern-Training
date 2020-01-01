// import React, { Component } from "react";
// class Handler extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     return <div></div>;
//   }
// }

// export default Handler;



{
    /* <div className = "admin" style={{}}>
  
                  <h1 style={{marginLeft:"40%"}}> Adminpage</h1>
  
                  <div className = "hotelcontent" style={{marginLeft:"10px",display:"grid",gridTemplateColumns:"25% 25% 25%"}}>
              <br/>
              <h3 style = {{marginTop:"10%",marginLeft:"30%"}}>  ADDING HOTEL CONTENT </h3>
               <br/>
                  <p>COLOUR OF HEADING:     
  
  
                 <pre></pre> <input type="text"    value = {this.state.color}  onChange={this.updateInput} />
  
                  </p>
                  <p>
  HEAD : 
               <pre/>   <input type="text"    value = {this.state.head}  onChange={this.updateIm} />
  </p>
  <p>
  content: 
               <pre/>   <input type="text"    value = {this.state.content}  onChange={this.updatecon} />
  </p>
  
  
  <p>
  IMG SRC: 
               <pre/>   <input type="text"    value = {this.state.src}  onChange={this.updatesrc} />
  </p>
  
  <p>
  PRICE: 
               <pre/>   <input type="text"    value = {this.state.price}  onChange={this.updateprice} />
  </p>
  <p>
  Rating: 
               <pre/>   <input type="text"    value = {this.state.rating}  onChange={this.updaterating} />
  </p>
  
  
  
  
  
  <button onClick={this.submitre} style = {{height:"30px" ,width:"150px",marginTop:"30px",borderRadius:"20px",marginLeft:"400px"}}> add</button>
  </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  <div className = "reviewercontent"  style={{marginLeft:"10px",display:"grid",gridTemplateColumns:"25% 25% 25%"}}>
  <br/>
  <h3 style = {{marginTop:"50px"}}>  ADDING REVIEW CONTENT </h3>
  <br/>
  <p>SRC:     
  
  
  <pre></pre> <input type="text"    value = {this.rsrc}  onChange={this.updatersrc} />
  </p>
  <p>
  TEXT: 
  <pre/>   <input type="text"    value = {this.state.rtext}  onChange={this.updatertext} />
  </p>
  <p>
  USER PROFILE: 
  <pre/>   <input type="text"    value = {this.state.rlogo}  onChange={this.updaterlogo} />
  </p>
  
  
  <p>
      NAME: 
  <pre/>   <input type="text"    value = {this.state.rname}  onChange={this.updatername} />
  </p>
  
  <p>
  CITY: 
  <pre/>   <input type="text"    value = {this.state.rcity}  onChange={this.updatercity} />
  </p>
  
  <br/>
  <br/>
  
  
  
  <button onClick={this.submitr} style = {{height:"30px" ,width:"150px",marginTop:"30px",borderRadius:"20px",marginLeft:"400px"}}> add</button>
  </div>Cannot read property 'state' of undefined
   */
  }
  
  {
    /* 
  <br/>
  <br/> */
  }
  {
    /* file upload
  <div className="container">
  <div className="row">
      <form onSubmit={this.onSubmit}>
          <div className="form-group">
              <input type="file" onChange={this.onFileChange} />
          </div>
          <div className="form-group">
              <button className="btn btn-primary" type="submit">Upload</button>
          </div>
      </form>
  </div>
  </div> */
  }
  {
    /* </div> */
  }
  
  {
    /* <div className = "change" style={{marginLeft:"40px"}}>
      <h2 style = {{marginLeft :"30%"}}>MODIFY</h2>
      <br/>
  
  
  </div> */
  }
  
  {
    /* row nd columns */
  }
  
  {
    /* <div className="r1" style={{ margin: "3%" }}>
            <div className="cc1">
              <h3>COLOUR OF HEADING:</h3>
              <input
                style={{
                  width: "80%",
                  padding: "2%",
                  borderRadius: "10px",
                  marginTop: "15px",
                  marginLeft: "20px"
                }}
                type="text"
                placeholder="color"
                value={this.state.color}
                onChange={this.updateInput}
              />
              <h3 style={{ marginTop: "20px" }}>content:</h3>
              <input
                style={{
                  width: "80%",
                  padding: "2%",
                  borderRadius: "10px",
                  marginTop: "15px",
                  marginLeft: "20px"
                }}
                type="text"
                placeholder="content"
                value={this.state.content}
                onChange={this.updatecon}
              />
  
              <h3 style={{ marginTop: "20px" }}> IMG SRC:</h3> */
  }
  {
    /* <input
                placeholder="src"
                type="text"
                style={{
                  width: "80%",
                  padding: "2%",
                  borderRadius: "10px",
                  marginTop: "15px",
                  marginLeft: "20px"
                }}
                value={this.state.src}
                onChange={this.updatesrc}
              /> */
  }
  
  {
    /* 
              <Formimage />
            </div>
            <div className="cc2">
              <h3>head</h3>
              <input
                style={{
                  width: "80%",
                  padding: "2%",
                  borderRadius: "10px",
                  marginTop: "15px",
                  marginLeft: "20px"
                }}
                type="text"
                placeholder="head"
                value={this.state.head}
                onChange={this.updateIm}
              />
  
              <h3 style={{ marginTop: "20px" }}>PRICE: </h3>
              <input
                style={{
                  width: "80%",
                  padding: "2%",
                  borderRadius: "10px",
                  marginTop: "15px",
                  marginLeft: "20px"
                }}
                type="text"
                placeholder="Price"
                value={this.state.price}
                onChange={this.updateprice}
              />
  
              <h3 style={{ marginTop: "20px" }}>Rating: </h3>
              <input
                style={{
                  width: "80%",
                  padding: "2%",
                  borderRadius: "10px",
                  marginTop: "15px",
                  marginLeft: "20px"
                }}
                type="text"
                placeholder="Rating"
                value={this.state.rating}
                onChange={this.updaterating}
              />
            </div>
          </div>
          <Button
            type="button"
            style={{
              marginTop: "20px",
              marginLeft: "590px",
              width: "150px",
              height: "40px",
              backgroundColor: "rgb(18, 120, 249)"
            }}
            class="btn btn-info btn-sm"
            onClick={this.submitre}
          >
            ADD
          </Button> */
  }
  {
    /* 
          <div className="r1" style={{ margin: "3%" }}>
            <div className="cc1">
              <h3 style={{ marginTop: "20px" }}>SRC:</h3>
  
              {/* <input
                style={{
                  width: "80%",
                  padding: "2%",
                  borderRadius: "10px",
                  marginTop: "15px",
                  marginLeft: "20px"
                }}
                type="text"
                placeholder="SRC"
                value={this.rsrc}
                onChange={this.updatersrc}
              /> */
  }
  {
    /* <Formimage />
  
              <h3 style={{ marginTop: "20px" }}> TEXT: </h3>
              <input
                style={{
                  width: "80%",
                  padding: "2%",
                  borderRadius: "10px",
                  marginTop: "15px",
                  marginLeft: "20px"
                }}
                type="text"
                placeholder="Text"
                value={this.state.rtext}
                onChange={this.updatertext}
              />
  
              <h3 style={{ marginTop: "20px" }}> USER PROFILE: </h3> */
  }
  {
    /* <input
                style={{
                  width: "80%",
                  padding: "2%",
                  borderRadius: "10px",
                  marginTop: "15px",
                  marginLeft: "20px"
                }}
                type="text"
                placeholder="LOGO"
                value={this.state.rlogo}
                onChange={this.updaterlogo}
              /> */
  }
  
  {
    /* <Formimage />
            </div>
  
            <div className="cc2">
              <h3 style={{ marginTop: "20px" }}> NAME:</h3>
              <input
                style={{
                  width: "80%",
                  padding: "2%",
                  borderRadius: "10px",
                  marginTop: "15px",
                  marginLeft: "20px"
                }}
                type="text"
                placeholder="Name"
                value={this.state.rname}
                onChange={this.updatername}
              />
  
              <h3 style={{ marginTop: "20px" }}> CITY: </h3>
              <input
                style={{
                  width: "80%",
                  padding: "2%",
                  borderRadius: "10px",
                  marginTop: "15px",
                  marginLeft: "20px"
                }}
                type="text"
                placeholder="City"
                value={this.state.rcity}
                onChange={this.updatercity}
              />
            </div>
          </div>
  
  
  
          <Button
            type="button"
            style={{
              marginTop: "20px",
              marginLeft: "590px",
              width: "150px",
              height: "40px",
              backgroundColor: "rgb(18, 120, 249)"
            }}
            class="btn btn-info btn-sm"
            onClick={this.submitr}
          >
            ADD
          </Button> */
  }
  {
    /* <Crud /> */
  }
  
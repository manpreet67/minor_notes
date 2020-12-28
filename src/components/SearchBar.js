import React, { useState } from "react";
import fetch from "../utils/apiClient";
import { MDBCol } from "mdbreact";


const SERVER = "http://b4c3294aba04.ngrok.io"



const SearchBar = (props) => {
  const inputEvent = (event) => {
    const { value } = event.target;
    props.setSearchItem(() => value);
  }

  return (
    <div className="d-flex justify-content-center mt-5">
      {console.log("working")}
      {/* <MDBCol md="12">
        <input className="form-control" type="text" placeholder="Search" aria-label="Search" style={{ backgroundColor: "black", color: "white", height: "50px" }} onChange={inputEvent} />
        <button onClick={props.addEvent}>Search</button>
      </MDBCol> */}
      <div className="wrap">
   <div className="search">
      <input type="text" className="searchTerm" placeholder="What are you looking for?" onChange={inputEvent}/>
      <button type="submit" className="searchButton" onClick={props.addEvent} >
        <i className="fa fa-search"></i>
     </button>
   </div>
</div>
    </div>
  );
}

export default SearchBar
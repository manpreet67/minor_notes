import React, { useState } from "react";
import fetch from "../utils/apiClient";
import { MDBCol } from "mdbreact";


const SERVER = "http://127.0.0.1:5000/"



const SearchBar = (props) => {
  const inputEvent = (event) => {
    const { value } = event.target;
    props.setSearchItem(() => value);
  }

  return (
    <div className="row mt-5">
      {console.log("working")}
      <MDBCol md="12">
        <input className="form-control" type="text" placeholder="Search" aria-label="Search" style={{ backgroundColor: "black", color: "white", height: "50px" }} onChange={inputEvent} />
        <button onClick={props.addEvent}>Search</button>
      </MDBCol>
    </div>
  );
}

export default SearchBar
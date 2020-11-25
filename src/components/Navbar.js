import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import {  isAuthenticated } from "../auth/helper/index";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#5bc0de" };
    // return { color: "#292b2c" };
  } else {
    return { color: "#ffffff" };
  }
};
//const Navbar=()=>{
  //  return(
      /*<nav class="navbar navbar-expand-lg navbar-light bg-info ">
  <a class="navbar-brand text-white" href="/">Smart Note </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ">
      
      <li class="nav-item px-4 text-light">
        <a class="nav-link text-white" href="/signin">SignIn</a>
      </li>
      <li class="nav-item px-4 text-light">
        <a class="nav-link text-white" href="/signup">Signup</a>
      </li>
      
    </ul>
  </div>
</nav>
        /* <nav>
         <div className="nav-wrapper ">
           <Link to="/" className="brand-logo left">Smart Note</Link>
          <ul id="nav-mobile" className="right">
            <li><Link to="/signin">Signin</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            
          </ul>
        </div>
      </nav> */ 

      
      
      const Navbar = ({ history }) => (
        <div style={{ position: "fixed", width: "100vw", zIndex: "5", top: "0" }}>
          <ul className="nav bg-info p-2 font-weight-bold">
            <li className="nav-item">
              <Link style={currentTab(history, "/")} className="nav-link" to="/">
                Home
              </Link>
            </li>
           
      
            {/* Displays/Returns Dashboard nav button when user is authenticated, otherwise hides it from navbar */}
            {isAuthenticated() && (
              <li className="nav-item">
                <Link
                  style={currentTab(history, "/")}
                  className="nav-link"
                  to="/"
                >
                 Home
                </Link>
              </li>
            )}
      
            
      
            {/* Displays/Returns Signin nav button when user is not authenticated, otherwise hides it from navbar */}
            {!isAuthenticated() && (
              <Fragment>
                <li className="nav-item">
                  <Link
                    style={currentTab(history, "/signup")}
                    className="nav-link"
                    to="/signup"
                  >
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    style={currentTab(history, "/signin")}
                    className="nav-link"
                    to="/signin"
                  >
                    Signin
                  </Link>
                </li>
              </Fragment>
            )}
            {/* Displays/Returns Signout nav button when user is authenticated, otherwise hides it from navbar */}
            {/* onCLick event fires a callback to initiate "signout" method which fires callback to redirect the user to "/" */}
            {/* {isAuthenticated() && (
              <li
                className="nav-item"
                onClick={() => {
                  signout(() => {
                    history.push("/");
                  });
                }}
              >
                <Link
                  style={currentTab(history, "/signout")}
                  className="nav-link text-warning"
                  to=""
                >
                  Signout
                </Link>
              </li>
            )} */}
          </ul>
                
        </div>

    )



    export default withRouter(Navbar);
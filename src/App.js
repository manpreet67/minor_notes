import React from "react";

import { BrowserRouter, Route,Switch } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Home from "./components/Home";


const App = () => {
    return (
        <>
        
        <BrowserRouter>
        <Navbar />
        <Switch>
        
            
            <Route exact path="/signup">
                <Signup />
            </Route>


            <Route path="/signin">
                <Signin />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
            </Switch>


        </BrowserRouter>
        </>
        );
}




export default App;
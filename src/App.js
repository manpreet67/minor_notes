import React from "react";

import {BrowserRouter,Route} from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
    return(
        <BrowserRouter>
            
               
               <Navbar/>
                <Route path="/signup">
                    <Signup/>
                    </Route>
                

                    <Route path="/signin">
                    <Signin/>
                    </Route>
                    <Route path exact="/">
                    <Home/>
                    </Route>
                
                
            
    </BrowserRouter>    );
}




export default App;
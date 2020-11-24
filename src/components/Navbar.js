import React from 'react'
import {Link} from 'react-router-dom'


const Navbar=()=>{
    return(
      <nav class="navbar navbar-expand-lg navbar-light  bg-warning">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">Smart Note <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/signin">SignIn</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/signup">Signup</a>
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
    )
}


export default Navbar
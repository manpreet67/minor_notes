import React from 'react'
import {Link} from 'react-router-dom'


const Navbar=()=>{
    return(
        <nav>
        <div className="nav-wrapper ">
          <Link to="/" className="brand-logo left">Smart Note</Link>
          <ul id="nav-mobile" className="right">
            <li><Link to="/signin">Signin</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            
          </ul>
        </div>
      </nav>
    )
}


export default Navbar
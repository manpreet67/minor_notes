import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../auth/helper/index";


const Signin = () => {
	//Initial States for the Signin component
	const initialValues = {
		email: "",
		password: "",
		error: "",
		loading: false,
		didRedirect: false,
	};

	//States for Signin component
	const [values, setValues] = useState(initialValues);

	//Destructuring the states of the Signin component
	const { email, password, error, loading, didRedirect } = values;

	//Getting the user object from localstorage of client browser
	const { user } = isAuthenticated();

	//Sets data in the states according to the input fields
	const handleChange = (inputValue) => (event) => {
		setValues({ ...values, error: false, [inputValue]: event.target.value });
	};

	//Submits the sign in form and gets the response token along with user data from the backend
	const formSubmit = (event) => {
		event.preventDefault();
		setValues({ ...values, loading: true });
		signin({ email, password })
			.then((data) => {
				if (data.error) {
                    
					setValues({ ...values, error: data.error, loading: false });
				} else {
					authenticate(data, () => {
						setValues({ ...initialValues, didRedirect: true });
					});
				}
			})
			.catch((err) =>
				console.log("Error: Signin request to the server failed!\n", err)
			);
		//This catch runs whenever there is an error at the backend which is not handled
	};

	const performRedirect = () => {
		//Redirect the "Admin User" to "Admin Dashboard" & "Normal User" to " User Dashboard"
		if (didRedirect) {
			
				return <Redirect to="/home" />;
			
		}
	};

	//Loading state message popup
	const loadingMessage = () => {
		return (
			loading && (
				<div className="alert alert-info text-center">
					<h2>Loading...</h2>
				</div>
			)
		);
	};

	//Signup error message popup
	const errorMessage = () => {
		return (
			<div className="row">
				<div className="col-md-6 offset-sm-3 text-center">
					<div
						className="alert alert-danger"
						style={{ display: error ? "" : "none" }}
					>
						{error}
					</div>
				</div>
			</div>
		);
	};

	//Signin form component
	const signInForm = () => {
		return (
			<div className="row mt-5 ">
				
			<div className="card text-center md-auto mx-auto "style={{margin:'100px',width:'30rem'}}> 

			<h5 className="card-header info-color white-text text-center py-4">
			<strong>Sign in</strong>
			</h5>


			<div className="card-body px-lg-5 pt-0">

 
  			<form className="text-center" style={{color: "#757575"}} action="#!">

	
				<div className="md-form">
				<input type="email"
								className="form-control"
								onChange={handleChange("email")}
								value={email} id="materialLoginFormEmail" className="form-control" placeholder="E-Mail"/>
	  
	</div>

	
	<div className="md-form">
	<input
								type="password"
								className="form-control"
								onChange={handleChange("password")}
								value={password} id="materialLoginFormPassword" placeholder="Password"
							/>
	  
	</div>

	<div className="d-flex justify-content-around">
	  <div>
		
		<div className="form-check">
		  <input type="checkbox" className="form-check-input" id="materialLoginFormRemember"/>
		  <label className="form-check-label" for="materialLoginFormRemember">Remember me</label>
		</div>
	  </div>
	  <div>
		
		<a href="">Forgot password?</a>
	  </div>
	</div>

	
	<button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit" onClick={formSubmit}>Sign in</button>

	
	<p>Not a member?
	  <a href="">Register</a>
	</p>

	
	<p>or sign in with:</p>
	<a type="button" className="btn-floating btn-fb btn-sm">
	  <i className="fab fa-facebook-f"></i>
	</a>
	<a type="button" className="btn-floating btn-tw btn-sm">
	  <i className="fab fa-twitter"></i>
	</a>
	<a type="button" className="btn-floating btn-li btn-sm">
	  <i className="fab fa-linkedin-in"></i>
	</a>
	<a type="button" className="btn-floating btn-git btn-sm">
	  <i className="fab fa-github"></i>
	</a>

  	</form>
  



	  </div>
			</div>
			</div>
			
			
		);
	};

	return (
		<div>
		
				{loadingMessage()}
				{errorMessage()}
				{signInForm()}
				{performRedirect()}
		
		</div>
	);
};

export default Signin;

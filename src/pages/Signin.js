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
			<div className="row">
				<div className="col-md-6 offset-sm-3 text-left">
					<form>
						<div className="form-group">
							<label className=".text-dark">Email</label>
							<input
								type="email"
								className="form-control"
								onChange={handleChange("email")}
								value={email}
							/>
						</div>
						<div className="form-group">
							<label className=".text-dark">Password</label>
							<input
								type="password"
								className="form-control"
								onChange={handleChange("password")}
								value={password}
							/>
						</div>
						<button className="btn btn-success btn-block" onClick={formSubmit}>
							Sign in
						</button>
					</form>
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

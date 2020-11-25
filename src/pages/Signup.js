import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper/index";

const Signup = () => {
	//Initial States for the Signup component
	const initialValues = {
        firstname: "",
        lastname: "",
		email: "",
		password: "",
		error: "",
		success: false,
	};

	//States for Signup component
	const [values, setValues] = useState(initialValues);

	//Destructuring the states of the Signup component
	const { firstname,lastname, email, password, error, success } = values;

	//Sets data in the states according to the input fields
	const handleChange = (inputValue) => (event) => {
		setValues({
			...values,
			error: false,
			success: false,
			[inputValue]: event.target.value,
		});
	};

	//Submits the signup form and gets the response data from the backend
	const formSubmit = (event) => {
		event.preventDefault();
		setValues({ ...values, error: false });
		console.log(values)
		signup({first_name: firstname,last_name:lastname,email: email, password: password })
			.then((data) => {
				console.log(data)
				if (data.error) {
					setValues({ ...values, error: data.error, success: false });
				} else {
					setValues({ ...initialValues, success: true });
				}
			})
			.catch((err) =>
				console.log("Error: Signup request to the server failed!\n", err)
			);
		//This catch runs whenever there is an error at the backend which is not handled
	};

	//Signup success message popup
	const successMessage = () => {
		return (
			<div className="row">
				<div className="col-md-6 offset-sm-3 text-center">
					<div
						className="alert alert-success"
						style={{ display: success ? "" : "none" }}
					>
						New account was created successfully. Please{" "}
						<Link to="/signin">Login here</Link>
					</div>
				</div>
			</div>
		);
	};

	//Signup error message popup
	const errorMessage = () => {
		return (
			<div className="row">
				<div className="col-md-6 offset-sm-3 text-center">
					<div className="alert alert-danger"
						style={{ display: error ? "" : "none" }}
					>
						{error}
					</div>
				</div>
			</div>
		);
	};

	//Signup form component
	const signUpForm = () => {
		return (
			<div className="row mt-5 ">
			<div className="card text-center md-auto mx-auto "style={{margin:'100px',width:'30rem'}}>

    <h5 className="card-header info-color white-text text-center py-4">
        <strong>Sign up</strong>
    </h5>

   
    <div className="card-body px-lg-5 pt-0">

        
        <form className="text-center" style={{color: "#757575"}} action="#!">

            <div className="form-row">
                <div className="col">
                   
                    <div className="md-form">
                        <input type="text" id="materialRegisterFormFirstName" className="form-control" onChange={handleChange("firstname")}
								value={firstname} placeholder="First Name"/>
                       
                    </div>
                </div>
                <div className="col">
                   
                    <div className="md-form">
                        <input type="email" id="materialRegisterFormLastName" className="form-control" onChange={handleChange("lastname")}
								value={lastname} placeholder="Last Name"/>
                        
                    </div>
                </div>
            </div>

            
            <div className="md-form mt-0">
                <input type="email" id="materialRegisterFormEmail" className="form-control" onChange={handleChange("email")}
								value={email} placeholder="E Mail"/>
               
            </div>

            
            <div className="md-form">
                <input type="password" id="materialRegisterFormPassword" className="form-control" aria-describedby="materialRegisterFormPasswordHelpBlock" onChange={handleChange("password")}
								value={password} placeholder="Password"/>
               
                <small id="materialRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
                    At least 8 characters and 1 digit
                </small>
            </div>

           
            

           
            <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit" onClick={formSubmit}>Sign up</button>

            
            <p>or sign up with:</p>

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

            

            
            <p>By clicking
                <em>Sign up</em> you agree to our
                <a href="" target="_blank">terms of service</a>
			</p>
        </form>
        

    </div>

</div>
</div>


	);
};
return (
		<div>
			
				{successMessage()}
				{errorMessage()}
				{signUpForm()}

		</div>
		);
	};


export default Signup;

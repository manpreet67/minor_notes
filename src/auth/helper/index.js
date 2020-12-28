// import { API } from "../../backened";

const API = "http://b4c3294aba04.ngrok.io"

//Send user signup data to the backend
export const signup = (ourUser) => {
	return fetch(`${API}/user`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(ourUser),

	})
		.then((response) => {
			console.log(response);
			return response.json();
		})
		.catch((err) => console.log(err));
};

//Send user user: {email, password} data to the backend and creates "JWT token" and sets Cookie
//Then if signin is successful returns "JWT token" and "user data" which will be set to localStorage at the frontend
export const signin = (ourUser) => {

	return fetch(`${API}/login`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(ourUser),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

//Called after signin succeeds to save the response "JWT token" & "user data" to the localStorage of client's browser
export const authenticate = (data, next) => {
	if (typeof Window !== "undefined") {
		console.log(data)
		localStorage.setItem("jwt", data.idToken);
		next();
	}
};

//First : It removes jwt token set in the localStorage of browser
//Second : "next()" is used to fire a callback which will be used in frontend to redirect
//Third : fetch sends a "GET" req to the backend which clears the "Cookie" at backend thereby signout the user from tha backend
export const signout = (next) => {
	if (typeof Window !== "undefined") {
		localStorage.removeItem("jwt");
		// next();

		// return fetch(`${API}/signout`, {
		// 	method: "GET",
		// })
		// 	.then((response) => console.log("Signout successful!"))
		// 	.catch((err) => console.log(err));
	}
};

//It check wheather the client's browser localStorage contains JWT token and user data as a key "jwt"
export const isAuthenticated = () => {
	if (typeof Window == "undefined") {
		return false;
	}
	if (localStorage.getItem("jwt")) {
		return localStorage.getItem("jwt");
	} else {
		return false;
	}
};

export const getNote = () => {

	return fetch(`${API}/note/`, {
		method: "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},

	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const deleteNote = (user) => {
	console.log(user);
	return fetch(`${API}/note`, {
		method: "DELETE",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

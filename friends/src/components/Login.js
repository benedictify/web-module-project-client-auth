import React/* , { useState }  */from 'react';
import axios from 'axios';

const initCredentials = {
	username: 'lambda',
	password: 'school'
}

const Login = () => {
	// const [credentials, setCredentials] = useState(initCredentials);

	// login form
	// username input - handleChange
	// password input - ''
	// submit button - handleSubmit
		// call server with login post request
			// "loading" state
		// save token
		// redirect user

	const loginSubmit = () => {
		axios.post("http://localhost:5000/api/login", initCredentials)
			.then(response => {
				console.log(response.data);
				// localStorage.setItem('token', response.data.token)
			})
			.catch(error => {
				console.log(error)
			})
	}

	return (
		<div>
			<form onSubmit={loginSubmit}>
				<h1>Login Page</h1>
				<button type="submit">Submit</button>
			</form>
		</div>
)}

export default Login;
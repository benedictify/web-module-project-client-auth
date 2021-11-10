import React, { useState } from 'react';
import axios from 'axios';

const initCredentials = {
	username: 'lambda',
	password: 'school'
}

const Login = () => {
	const [credentials, setCredentials] = useState(initCredentials);
	const [loading, setLoading] = useState(false);

	// login form
	// username input - handleChange
	// password input - ''
	// submit button - handleSubmit
	// call server with login post request
	// "loading" state
	// save token
	// redirect user

	const handleChange = (e) => {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value
		})
	}

	const loginSubmit = (e) => {
		e.preventDefault();
		
		setLoading(true);

		axios.post("http://localhost:5001/api/login", { username: credentials.username, password: credentials.password })
			.then(response => {
				// localStorage.setItem('token', response.data.token)
				console.log(response.data)
			})
			.catch(error => {
				console.log(error)
			})

		setLoading(false);
	}

	return (
		<div>
			<form onSubmit={loginSubmit}>
				<h1>Login Page</h1>

				<input
					type="text"
					name="username"
					placeholder="Username"
					value={credentials.username}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="password"
					placeholder="Password"
					value={credentials.password}
					onChange={handleChange}
				/>
				<button>Submit</button>
			</form>
		</div>
	)
}

export default Login;
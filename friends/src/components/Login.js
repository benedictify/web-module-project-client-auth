import React, { useState } from 'react';
import axios from 'axios';

const initCredentials = {
	username: '',
	password: ''
}

const Login = (props) => {
	const [credentials, setCredentials] = useState(initCredentials);

	const handleChange = (e) => {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value
		})
	}

	const loginSubmit = (e) => {
		e.preventDefault();

		axios.post("http://localhost:5001/api/login", credentials)
			.then(response => {
				localStorage.setItem('token', response.data.token)
				props.history.push('/friends')
			})
			.catch(error => {
				console.log(error)
			})
	}

	return (
		<div>
			<h1>Login Page</h1>
			<form onSubmit={loginSubmit}>
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
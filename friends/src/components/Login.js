import React, { useState } from 'react';
import axios from 'axios';

const initCredentials = {
	username: 'lambda',
	password: 'school'
}

const Login = (props) => {
	const [credentials, setCredentials] = useState(initCredentials);
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value
		})
	}

	const loginSubmit = (e) => {
		e.preventDefault();
		
		setLoading(true);

		axios.post("http://localhost:5001/api/login", credentials)
			.then(response => {
				localStorage.setItem('token', response.data.payload);
				props.history.push('/friends');
			})
			.catch(error => {
				console.log(error);
			})
			
		setLoading(false);
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
					type="password"
					name="password"
					placeholder="Password"
					value={credentials.password}
					onChange={handleChange}
					/>
				<button>Log In</button>
			</form>
			{loading && <h2>Loading...</h2>}
		</div>
	)
}

export default Login;
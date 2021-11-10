import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Login = () => {
	return (<h1>Login</h1>)
}

function App() {
	return (
		<div className="App">
			<h1>Circle of "Friends"</h1>
			<div>
				<Link to="/login">Login</Link>
			</div>
			<div>
				<Switch>
					<Route path="/login" component={LoginForm}/>
				</Switch>
			</div>
		</div>
	);
}

export default App;

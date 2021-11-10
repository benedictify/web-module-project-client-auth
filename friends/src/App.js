import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

// const Login = () => {
// 	return (<h1>Login</h1>)
// }

function App() {
	return (
		<Router>
			<div className="App">
				<h1>Circle of "Friends"</h1>
				<div>
					<Link to="/">Home</Link>
					<span> | </span>
					<Link to="/login">Login</Link>
				</div>
				<div>
					<Switch>
						<Route path="/login" component={Login} />
						<Route path="/friends" component={FriendsList} />
						<Route exact path="/" component={Home} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;

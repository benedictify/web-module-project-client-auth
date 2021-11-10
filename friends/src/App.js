import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {
	const loggedIn = localStorage.getItem('token');
	const username = localStorage.getItem('username');

	return (
		<Router>
			<div className="App">
				<h1>Circle of "Friends"</h1>
				<div>
					<Link to="/">Home</Link>
					{(loggedIn) ? 
					<span>
						<span> | </span>
						<Link to="/friends">Friends</Link>
					</span> :
					<span>
						<span> | </span>
						<Link to="/login">Login</Link>
					</span> 
					}
				</div>
				<div>
					<Switch>
						<PrivateRoute path="/friends" component={FriendsList} />
						<Route path="/login" component={Login} />
						<Route exact path="/" component={Home} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;

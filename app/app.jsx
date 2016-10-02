var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
//var TodoApp = require('TodoApp');
import TodoApp from 'TodoApp'
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure(); // returns store
var TodoAPI = require('TodoAPI');
//var Login = require('Login');
import Login from 'Login';
import firebase from 'app/firebase/';

import router from 'app/router/';

firebase.auth().onAuthStateChanged((user) => {
	if(user) {
		store.dispatch(actions.login(user.uid))
		store.dispatch(actions.startAddTodos())
		hashHistory.push('/todos');
	} else {
		store.dispatch(actions.logout())
		hashHistory.push('/');
	}
})



// Morning Challenge - Login page component
// Then add the route - index = login, then a route for /todos

// store.subscribe(() => {
// 	var state = store.getState();
// 	console.log('State: ', state)
// 	TodoAPI.setTodos(state.todos);}
// )

//import './../playground/fbindex.js';

// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

// get data from firebase



//store.dispatch(actions.addTodo('Fix my redux store'))
//store.dispatch(actions.setSearchText(''))
//store.dispatch(actions.toggleShowCompleted())



// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

/*

http://api.openweathermap.org/data/2.5/weather
?q=London,uk&appid=0bbf7572880155f0d500eca39a583571&units=imperial

*/

// ReactDOM.render(
//  <Router history={hashHistory}>
//  	<Route path="/" component={Main}>
//  		<Route path="countdown" component={Countdown} />
//  		<IndexRoute component={Timer}/> 
//  	</Route>
//  </Router>,
//   document.getElementById('app')
// );




ReactDOM.render(
	<Provider store={store}>
	 {router}
	</Provider>,
	document.getElementById('app')
)







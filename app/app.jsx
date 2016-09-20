var React = require('react');
var ReactDOM = require('react-dom');
var TodoApp = require('TodoApp');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure(); // returns store

store.subscribe(() => {
	console.log('New State: ', store.getState());
})


store.dispatch(actions.addTodo('Fix my redux store'))
store.dispatch(actions.setSearchText('My redux search text'))
store.dispatch(actions.toggleShowCompleted())



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
	<TodoApp />,
	document.getElementById('app')
	)

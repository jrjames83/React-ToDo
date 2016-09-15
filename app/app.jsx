var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');




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
	<p>Boilerplate3 Project </p>,
	document.getElementById('app')
	)

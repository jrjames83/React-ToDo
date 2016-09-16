var React = require('react');
var ReactDOM = require('react-dom');
var TodoList = require('TodoList');




var TodoApp = React.createClass({
	getInitialState() {
	    return {
	        todos: [
	        	{
	        		id: 1,
	        		text: "Walk Chance"
	        	},	        	{
	        		id: 2,
	        		text: "Go To Whole Foods"
	        	},	        	{
	        		id: 3,
	        		text: "Hit RedRocks"
	        	},	        	{
	        		id: 4,
	        		text: "Do Some Work"
	        	}
	        ]  
	    };	
	},
    displayName: 'TodoApp',
    render() {
    	var {todos} = this.state;
        return (
            <div>
            <h1>Todo App.jsx</h1>
            	<TodoList todos={todos} />
            </div>
        );
    }
});

module.exports = TodoApp;
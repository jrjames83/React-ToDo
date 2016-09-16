var React = require('react');
var ReactDOM = require('react-dom');
var TodoList = require('TodoList');
var AddTodo = require('addTodo');




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
    handleAddTodo(item) {
    	var newArray = this.state.todos.slice();
    	newArray.push({id: newArray.length + 1, text:item})
    	this.setState({todos: newArray}) 
    	console.log(item);
    },
    render() {
    	var {todos} = this.state;
        return (
        	<div className="small-2 large-4 columns">
             <div className="row">
             <h1>Todo App.jsx</h1>
            	<TodoList todos={todos} />
            	<AddTodo addTodo={this.handleAddTodo} />
             </div>
            </div>
        );
    }
});

module.exports = TodoApp;
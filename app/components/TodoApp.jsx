var React = require('react');
var ReactDOM = require('react-dom');
var TodoList = require('TodoList');
var AddTodo = require('addTodo');
var Search = require('Search');


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

    filterTodos(value) {
    	console.log("Hi it's the main component: ", value)
    	// Remove elements from state which do not contain string

    	// this.state.todos.map(function(todo) {
    	// 	if(todo.text.includes(value)) {
    	// 		console.log(todo.text, " Is a match!")
    	// 	}
    	// })

    	// Now figure out how to undo the filter....
    	// Maybe put this logic in compnent did update?
    	// Or component will update?
    	this.setState({todos:this.state.todos}) // did NOT work...
    	var updated = this.state.todos.filter(function(val) {
    		return val.text.includes(value);
    	})

    	this.setState({todos:updated});

    },

    componentDidUpdate(prevProps, prevState) {
        console.log("comp updated")  

    },

    handleAddTodo(item) {
    	var newArray = this.state.todos.slice();
    	newArray.push({id: newArray.length + 1, text:item})
    	this.setState({todos: newArray}) 
    	console.log(item);
    },
    render() {
    	var {todos} = this.state;
        return (
        	<div className="medium-6 large-4 columns small-centered">
             <div className="row">
             <h1>Todo App.jsx</h1>
             	<Search sendFilter={this.filterTodos}/>
            	<TodoList todos={todos} />
            	<AddTodo addTodo={this.handleAddTodo} />
             </div>
            </div>
        );
    }
});

module.exports = TodoApp;
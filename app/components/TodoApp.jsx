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
	        ],
	        searchFilter: ''  
	    };	
	},
    displayName: 'TodoApp',

    filterTodos(value) {

    	// Update the state
    	this.setState({searchFilter:value})

    	/* How do you check for backspacing?
    	var updated = this.state.todos.filter(function(val) {
    		return val.text.includes(value);
    	});

    	this.setState({todos:updated});  */

    },


    handleAddTodo(item) {
    	var newArray = this.state.todos.slice();
    	newArray.push({id: newArray.length + 1, text:item})
    	this.setState({todos: newArray}) 
    	console.log(item);
    },

    render() {
    	var {todos, searchFilter} = this.state;


    	var filterRender = () => {
    		if(searchFilter.length > 0) {
    			return this.state.todos.filter(function(val) {
    				return val.text.includes(searchFilter)
    			})
    		} else {
    			return todos
    		}
    	}


    	// Conditionally render based on searchFilter here
        return (
        	<div className="medium-6 large-4 columns small-centered">
             <div className="row">
             <h1>Todo App.jsx</h1>
             	<Search sendFilter={this.filterTodos}/>
            	<TodoList todos={filterRender()} />
            	<AddTodo addTodo={this.handleAddTodo} />
             </div>
            </div>
        );
    }
});

module.exports = TodoApp;
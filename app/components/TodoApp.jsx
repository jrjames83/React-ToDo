var React = require('react');
var ReactDOM = require('react-dom');
var TodoList = require('TodoList');
var AddTodo = require('addTodo');
var Search = require('Search');
var uuid = require('node-uuid');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
	getInitialState() {
	    return {
	        todos: TodoAPI.getTodos(),

	        // [
	        // 	{
	        // 		id: uuid(),
	        // 		text: "Walk Chance",
	        // 		completed: true
	        // 	},	        	{
	        // 		id: uuid(),
	        // 		text: "Go To Whole Foods",
	        // 		completed: false
	        // 	},	        	{
	        // 		id: uuid(),
	        // 		text: "Hit RedRocks",
	        // 		completed: false
	        // 	},	        	{
	        // 		id: uuid(),
	        // 		text: "Do Some Work",
	        // 		completed: false
	        // 	}
	        // ],
	        searchFilter: '',
	        completed: false  
	    };	
	},
    displayName: 'TodoApp',

    handleSearch(completed, value) {
    	this.setState({
    		searchFilter:value.toLowerCase(),
    		completed: completed
    	})
    },

    componentDidUpdate(prevProps, prevState) {
        TodoAPI.setTodos(this.state.todos);
    },
    
    handleAddTodo(item) {

    	this.setState({
    		todos: [
    		...this.state.todos,
	    		{
	    			id: uuid(),
	    			text: item,
	    			completed: false
	    		}
    		]
    	})
    	// var newArray = this.state.todos.slice();
    	// newArray.push({id: uuid(), text:item})
    	// this.setState({todos: newArray}) 
    },

    // The ID is passed 2 comonents earlier
    handleToggle(id) {

    	var updatedTodos = this.state.todos.map(function(todo) {
    		// Updated where the todo id matches
    		if (todo.id === id) {
    			todo.completed = !todo.completed;
    			console.log('updated');
    		}
    		return todo
    	})

    	this.setState({todos: updatedTodos});

    },


    // What I did below: since the value of the filter box
    // Is really parat of the state, I added it to the state
    // Then if I use the filter, it conditionally renders to-do's
    // Based on an eval of a filter call on the todos array
    // Before, I was restricting the state, but never giving it
    // A chance to re-render itself
    render() {
    	var {todos, searchFilter} = this.state;


    	var filterRender = () => {
    		if(searchFilter.length > 0) {
    			return this.state.todos.filter(function(val) {
    				return val.text.toLowerCase().includes(searchFilter)
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
             	<Search sendFilter={this.handleSearch}/>
            	<TodoList todos={filterRender()} onToggle={this.handleToggle} />
            	<AddTodo addTodo={this.handleAddTodo} />
             </div>
            </div>
        );
    }
});

module.exports = TodoApp;
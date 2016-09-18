var React = require('react');
var ReactDOM = require('react-dom');
var TodoList = require('TodoList');
var AddTodo = require('addTodo');
var Search = require('Search');
var uuid = require('node-uuid');
var TodoAPI = require('TodoAPI');
var moment = require('moment');

var TodoApp = React.createClass({
	getInitialState() {
	    return {
	        todos: TodoAPI.getTodos(),
	        searchFilter: '',
	        completed: false  
	    };	
	},

    handleSearch(completed, value) {
    	this.setState({
    		searchFilter:value.toLowerCase(),
    		completed: completed
    	})
    },

    componentDidUpdate(prevProps, prevState) {
        TodoAPI.setTodos(this.state.todos);
        //console.log("i updated")
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

    render() {
    	var {todos, searchFilter, completed} = this.state;
    	var filteredTodos = TodoAPI.filterTodos(todos, completed, searchFilter)

    	// Now factored into the TodoAPI file
    	// var filterRender = () => {
    	// 	if(searchFilter.length > 0) {
    	// 		return this.state.todos.filter(function(val) {
    	// 			return val.text.toLowerCase().includes(searchFilter)
    	// 		})
    	// 	} else {
    	// 		return todos
    	// 	}
    	// }


    	// Conditionally render based on searchFilter here
        return (
        	<div className="medium-6 large-4 columns small-centered">
             <div className="row">
             <h1>Todo App.jsx</h1>
             	<Search sendFilter={this.handleSearch}/>
            	<TodoList todos={filteredTodos} onToggle={this.handleToggle} />
            	<AddTodo addTodo={this.handleAddTodo} />
             </div>
            </div>
        );
    }
});

module.exports = TodoApp;
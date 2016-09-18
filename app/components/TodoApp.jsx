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
	        completed: false,
	        sorted: false  
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
	    			completed: false,
	    			createdAt: moment().unix(),
	    			completedAt: undefined
	    		}
    		]
    	})
    },

    // The ID is passed 2 comonents earlier
    handleToggle(id) {
    	// What if we uncheck it...do we uncomplete it?
    	var updatedTodos = this.state.todos.map(function(todo) {
    		// Updated where the todo id matches
    		if (todo.id === id) {
    			todo.completed = !todo.completed;
    			// Below is very nifty, allows for updating checked to-dos to not done
    			todo.completedAt = todo.completed ? moment().unix() : undefined;
    			console.log('updated');
    		}
    		return todo
    	})

    	this.setState({todos: updatedTodos});

    },

    sortTodos(value) {
    	console.log("Gonna sort from the main app!")
    	// Now need a method on the API that just sorts the todos
    	this.setState({sorted: value});

    },

    render() {
    	var {todos, searchFilter, completed, sorted} = this.state;
    	var filteredTodos = TodoAPI.filterTodos(todos, completed, searchFilter, sorted)

        return (
             <div className="row">
             <div className="small-11 medium-6 large-6 columns small-centered">
             <h1 className="page-title">Todo App.jsx</h1>
             <div className="container">
             	<Search sendFilter={this.handleSearch} doSort={this.sortTodos}/>
            	<TodoList todos={filteredTodos} onToggle={this.handleToggle} />
            	<AddTodo addTodo={this.handleAddTodo} />
            </div>
             </div>
            </div>
        );
    }
});

module.exports = TodoApp;
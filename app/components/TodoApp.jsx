var React = require('react');
var ReactDOM = require('react-dom');
//import TodoList from 'TodoList'
//var TodoList = require('TodoList');
//var AddTodo = require('addTodo');

var TodoAPI = require('TodoAPI');
 
var AddTodo = require('AddTodo').default;
var TodoList = require('TodoList').default;
var Search = require('Search').default;

var uuid = require('node-uuid');
//
var moment = require('moment');

var TodoApp = React.createClass({

    render() {
    	// var {todos, searchFilter, completed, sorted} = this.state;
    	//var filteredTodos = TodoAPI.filterTodos(todos, completed, searchFilter, sorted)

        return (
             <div className="row">
              <div className="small-11 medium-6 large-6 columns small-centered">
              <h1 className="page-title">Todo App.jsx</h1>
               <div className="container">
             	<Search />
            	<TodoList/>
            	<AddTodo />
              </div>
             </div>
            </div>
        );
    }
});

module.exports = TodoApp;
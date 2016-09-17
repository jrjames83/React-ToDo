var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');


describe('TodoApp', () => {
	it('should exist', () => {
		expect(TodoApp).toExist();
	})

	it('should add a todo to the todostate on handleAddTodo', () =>{
		var toDoText = "Give Chance a Carrot";
		var toDoApp = TestUtils.renderIntoDocument(<TodoApp />);
		toDoApp.setState({todos: []})
		expect(toDoApp.state.todos.length).toBe(0) // before adding
		toDoApp.handleAddTodo(toDoText);
		expect(toDoApp.state.todos.length).toBe(1)
		expect(toDoApp.state.todos[0].text).toBe(toDoText)
	})
})
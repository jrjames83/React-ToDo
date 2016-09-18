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
		expect(toDoApp.state.todos[0].createdAt).toBeA('number')

		// expect that the created at should be a number

	})

	it('should toggle completed value when handleToggle called', () => {
		var todoData = {
			id: 11,
			text: "test features", 
			completed: false,
			createdAt: 0,
			completedAt: undefined
		};

		var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
		todoApp.setState({todos: []});
		todoApp.setState({todos: [todoData]});

		// Check first item has completed status of false
		expect(todoApp.state.todos[0].completed).toBe(false)

		// Call handleToggle with the id
		todoApp.handleToggle(11)

		// Check that completed value changed from false to true
		expect(todoApp.state.todos[0].completed).toBe(true)
		expect(todoApp.state.todos[0].completedAt).toBeA('number')

		// When we completed the task, expected completedAt to be a number

	})

	// Test what happens when you move a todo from completd to uncompleted, the date should be undfined
	// new test here

	it('moving a todo frmo complete to uncomplete should undefine the completedAt', () => {
		var todoData = {
			id: 11,
			text: "test features", 
			completed: false,
			createdAt: 0,
			completedAt: undefined
		};

		var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
		todoApp.setState({todos: []});
		todoApp.setState({todos: [todoData]});
		todoApp.handleToggle(11) // completed True
		expect(todoApp.state.todos[0].completedAt).toBeA('number')
		todoApp.handleToggle(11) // completed false
		expect(todoApp.state.todos[0].completedAt).toBe(undefined)

	})

})
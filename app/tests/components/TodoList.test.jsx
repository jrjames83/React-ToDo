var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');


describe('TodoList', () => {
	it('should exist', () => {
		expect(TodoList).toExist();
	});

	it('should render one Todo component for each todo item', () => {
		// Create dummy data
		var todos = [
			{
				id: 1,
				text: 'do something'
			},
			{
				id: 2,
				text: 'get mail'
			}
		];
		var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />)
		// Check how many todo components are rendered inside of them
		// Util method gets all nested components
		var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo)

		expect(todosComponents.length).toBe(todos.length);
	})

	it('should render empty message if no todos', () => {
		// Create dummy data
		var todos = [];
		var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />)
		var $el = $(ReactDOM.findDOMNode(todoList));
		expect($el.find('.container_message').length).toBe(1);
	})
})
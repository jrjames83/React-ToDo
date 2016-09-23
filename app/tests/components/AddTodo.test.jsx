var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
import * as actions from 'actions';

var {AddTodo} = require('AddTodo'); // The non connected Component

describe('AddTodo', () => {
	it('should exist', () => {
		expect(AddTodo).toExist();
	})

	// Test that if I call a function, it was called with an arg

	it('dispatch ADD_TODO when valid todo text', () => {
		var todoText = 'Check email';

		var spy = expect.createSpy();
		
		var action = actions.startAddTodo(todoText);

		var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		expect($el).toExist();

		addTodo.refs.query.value = todoText;
		TestUtils.Simulate.click($el.find('button')[0]);

		expect(spy).toHaveBeenCalledWith(action);
	})

	it('should not dispatch ADD_TODO when invalid todo Text', () => {
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
		var $el = $(ReactDOM.findDOMNode(addTodo));
		expect($el).toExist();
		addTodo.refs.query.value = '';
		TestUtils.Simulate.click($el.find('button')[0]);
		expect(spy).toNotHaveBeenCalled();
	})	
})
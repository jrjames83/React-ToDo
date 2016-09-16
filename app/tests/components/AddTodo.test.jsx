var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
	it('should exist', () => {
		expect(AddTodo).toExist();
	})

	// Test that if I call a function, it was called with an arg

	it('addTodo should get called with an arg when button is clicked', () => {
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo addTodo={spy} />);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		expect($el).toExist();

		addTodo.refs.query.value = 'my todo';
		TestUtils.Simulate.click($el.find('button')[0]);

		expect(spy).toHaveBeenCalledWith('my todo');
	})

	it('addTodo should NOT get called if invalid data entered', () => {
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo addTodo={spy} />);
		var $el = $(ReactDOM.findDOMNode(addTodo));
		expect($el).toExist();
		addTodo.refs.query.value = '';
		TestUtils.Simulate.click($el.find('button')[0]);
		expect(spy).toNotHaveBeenCalled();
	})	
})
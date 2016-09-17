var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');


describe('Todo', () => {
	it('should exist', () => {
		expect(Todo).toExist();
	})

	it('should call onToggle prop with id on click', () => {

		var todoData = {
			id: 11,
			text: "test features", 
			completed: true
		};

		var spy = expect.createSpy();
		var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
		var $el = $(ReactDOM.findDOMNode(todo));
		expect($el).toExist();
		var input = $el.find(':checkbox')
		TestUtils.Simulate.change(input[0])
		expect(spy).toHaveBeenCalledWith(11);


	})
})
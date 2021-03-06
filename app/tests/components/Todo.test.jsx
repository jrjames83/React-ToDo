var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var {Todo} = require('Todo');
import * as actions from 'actions';


describe('Todo', () => {
	it('should exist', () => {
		expect(Todo).toExist();
	})

	it('should dispatch toggle todo action on click', () => {

		var todoData = {
			id: 11,
			text: "test features", 
			completed: true
		};

		var action = actions.startToggleTodo(todoData.id, !todoData.completed)

		var spy = expect.createSpy();
		var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);

		// Changed the DOM here, need to get the checkbox
		var $el = $(ReactDOM.findDOMNode(todo));
		expect($el).toExist();
		TestUtils.Simulate.click($el.find(":checkbox")[0]);
		expect(spy).toHaveBeenCalled()
		expect(spy).toHaveBeenCalledWith(action);


	})
})
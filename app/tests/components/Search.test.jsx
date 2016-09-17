var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Search = require('Search');

// When I change the search field, my application state should change
// Possibly the length of the to-do's should change


/*

Testing a child component:

When you render the spy, you use the component 
just as if you rendered it from the parent
the arg sendFilter is passed through the props and
bubbles up to the parent

*/

describe('Search', () => {
	it('should exist', () => {
		expect(Search).toExist();
	})

	it('When i enter text in the search, sendFilter should be called', () =>{
		var spy = expect.createSpy();
		// Below we're passing in the component just as we would in the Parent
		var searchForm = TestUtils.renderIntoDocument(<Search sendFilter={spy} />);
		var $el = $(ReactDOM.findDOMNode(searchForm));
		expect($el).toExist();
		searchForm.refs.query.value = 'abc';
		TestUtils.Simulate.change(searchForm.refs.query);
		expect(spy).toHaveBeenCalledWith(false, 'abc');
	})

	it('When I enter no text, but check the checkbox to show completed', () =>{
		var spy = expect.createSpy();
		// Below we're passing in the component just as we would in the Parent
		var searchForm = TestUtils.renderIntoDocument(<Search sendFilter={spy} />);
		var $el = $(ReactDOM.findDOMNode(searchForm));
		expect($el).toExist();
		searchForm.refs.query.value = '';
		searchForm.refs.showCompleted.checked = true;
		TestUtils.Simulate.change(searchForm.refs.query);
		expect(spy).toHaveBeenCalledWith(true, '');
	})



})
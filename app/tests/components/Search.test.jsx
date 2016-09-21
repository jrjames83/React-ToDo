var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

//var Search = require('Search');
import {Search} from 'Search';

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

	it('should dispatch SET_SEARCH_TEXT on input change', () =>{
		var spy = expect.createSpy();
		var searchText = 'dog'
		var action = {
			type: 'SET_SEARCH_TEXT',
			searchText: searchText
		}
		var searchForm = TestUtils.renderIntoDocument(<Search dispatch={spy} />);
		var $el = $(ReactDOM.findDOMNode(searchForm));
		expect($el).toExist();
		searchForm.refs.searchText.value = 'dog';
		TestUtils.Simulate.change(searchForm.refs.searchText);
		expect(spy).toHaveBeenCalledWith(action);
	})

	it('it should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () =>{
		var spy = expect.createSpy();
		var action = {
			type: 'TOGGLE_SHOW_COMPLETED'
		}
		// Below we're passing in the component just as we would in the Parent
		var searchForm = TestUtils.renderIntoDocument(<Search dispatch={spy} />);
		var $el = $(ReactDOM.findDOMNode(searchForm));
		expect($el).toExist();
		searchForm.refs.searchText.value = '';
		searchForm.refs.showCompleted.checked = true;
		TestUtils.Simulate.change(searchForm.refs.showCompleted);
		expect(spy).toHaveBeenCalledWith(action);
	})



})
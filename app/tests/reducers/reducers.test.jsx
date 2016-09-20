var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict'); // prove pure functions
var uuid = require('node-uuid');
var moment = require('moment');

describe('Reducers', () => {
	describe('searchTextReducer', () => {
		it('should set searchText', () => {
			var action = {
				type: 'SET_SEARCH_TEXT',
				searchText: 'dog'
			}

		var res = reducers.searchTextReducer(df(''), df(action));
		expect(res).toEqual(action.searchText);
		})
	})

	describe('showCompletedReducer', () => {
		it('should toggle the completed state', () => {

			var action = {
				type: 'TOGGLE_SHOW_COMPLETED'
			}

			var res = reducers.showCompletedReducer(df(false), df(action));
			expect(res).toBe(true)

		})
	})

	describe('todosReducer', () => {
		it('should add newtodo', () => {
			var action = {
				type: 'ADD_TODO',
				text: 'walk dog'
			}

			var res = reducers.todosReducer(df([]), df(action));
			expect(res.length).toEqual(1);
			expect(res[0].text).toEqual(action.text);
		})

		it('should toggle completed of a real todo', () => {
			var action = {
				type: 'TOGGLE_TODO', // doesnt take other args
				id: 1
			}
			var sampleTodo = [{
							  id:1, 
							  text: 'walk', 
							  completed: false, 
							  createdAt: moment().unix(),
							  completedAt: undefined
							}];

			var res = reducers.todosReducer(df(sampleTodo), df(action));
			expect(res[0].completed).toBe(true);
			expect(res[0].completedAt).toBeA('number');

		})
	})

})
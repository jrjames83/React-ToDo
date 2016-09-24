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
				// Action Object
				todo: {
					id: 'aaa',
					text: "something",
					completed: false,
					createdAt: 13323232
				}
			}

			var res = reducers.todosReducer(df([]), df(action));
			expect(res.length).toEqual(1);
			expect(res[0]).toEqual(action.todo);
		})

		it('should update todo', () => {

			var sampleTodo = [{
							  id:1, 
							  text: 'walk', 
							  completed: false, 
							  createdAt: moment().unix(),
							  completedAt: undefined
							}];

			var updates = {
				completed: false,
				completedAt: null
			}
			var action = {
				type: 'UPDATE_TODO', // doesnt take other args
				id: sampleTodo[0].id,
				updates: updates
			}



			var res = reducers.todosReducer(df(sampleTodo), df(action));
			expect(res[0].completed).toEqual(updates.completed);
			expect(res[0].completedAt).toEqual(updates.completedAt);
			expect(res[0].text).toEqual(sampleTodo[0].text)

		})


		it('should add existing todos', () => {			

			var sampleTodo = [{
							  id:1, 
							  text: 'walk', 
							  completed: false, 
							  createdAt: moment().unix(),
							  completedAt: undefined
							}];
			var action = {
				type: 'ADD_TODOS', // doesnt take other args
				todos: sampleTodo
			}
			var res = reducers.todosReducer(df([]), df(action));
			expect(res.length).toEqual(1);
			expect(res[0]).toEqual(sampleTodo[0]);
			
		})









	})

})
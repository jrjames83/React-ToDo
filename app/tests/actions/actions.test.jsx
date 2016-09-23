var expect = require('expect');
var actions = require('actions');
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';


var createMockStore = configureMockStore([thunk]);




describe('Actions', () => {
	it('should generate search text action', () => {
		var action = {
			type: 'SET_SEARCH_TEXT',
			searchText: 'some search text'
		};

		var res = actions.setSearchText(action.searchText);

		expect(res).toEqual(action);
	})


	it('should generate add todo action', () => {
		var action = {
			type: 'ADD_TODO',
			todo: {
				id: '123444',
				text: 'asfsdf',
				completed: false,
				createdAt: 23434
			}
		};

		var res = actions.addTodo(action.todo);
		expect(res).toEqual(action);
	})

	it('should create todo and dispatch ADD_TODO', (done) => {
		const store = createMockStore({});
		const todoText = 'My todo item';

		store.dispatch(actions.startAddTodo(todoText)).then(function(suc) {
			// These are the actions that startAddTodo kicks off
			const actions = store.getActions();
			expect(actions[0]).toInclude({
				type: 'ADD_TODO'
			})
			// the actions includes an object called todo
			expect(actions[0].todo).toInclude({
				text: todoText
			})
			done()
		}).catch(done);
	})


	it('it should generate a showCompleted action', () => {
		var action = {
			type: 'TOGGLE_SHOW_COMPLETED'
		}

		var res = actions.toggleShowCompleted();
		expect(res).toEqual(action);
	})

	it('it should generate a toggle todo action', () => {
		var action = {
			type: 'TOGGLE_TODO',
			id: 4
		}

		var res = actions.toggleTodo(4);
		expect(res).toEqual(action);
	})

	it('should generate add todos action object', () => {
		var todos = [{
			id: 111,
			text: 'jsfdjsdf',
			completed: false,
			completedAt: undefined,
			createdAt: 33000
		}]

		var action = {
			type: 'ADD_TODOS',
			todos: todos
		}

		var res = actions.addTodos(todos);
		expect(res).toEqual(action);
	})

})
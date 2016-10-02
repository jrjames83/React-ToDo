var expect = require('expect');
var actions = require('actions');
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import firebase, {firebaseRef} from 'app/firebase';


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

	if('should generate a login action object', () => {
		var action = {
			type: 'LOGIN',
			uid: '12345'
		}

		const res = actions.login(action.uid);
		expect(res).toEqual(action);
	})

	if('should generate a logout action object', () => {
		var action = {
			type: 'LOGOUT'
		}

		const res = actions.logout(action.uid);
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




	it('it should generate a showCompleted action', () => {
		var action = {
			type: 'TOGGLE_SHOW_COMPLETED'
		}

		var res = actions.toggleShowCompleted();
		expect(res).toEqual(action);
	})

	it('it should generate UPDATE_TODO action', () => {
		var action = {
			type: 'UPDATE_TODO',
			id: '4',
			updates: {completed: false}
		}

		var res = actions.updateTodo(action.id, action.updates);
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



	describe('Tests with firebase todos', () => {
	    var testTodoRef;
	    var uid;
	    var todosRef;

	beforeEach((done) => {
	      var credential = firebase.auth.GithubAuthProvider.credential('ea8671626260b983e99c729f37f4fffa664de41c');
	      console.log(credential)
	     	firebase.auth().signInWithCredential(credential).then((user) => {
	        uid = user.uid;
	        todosRef =  firebaseRef.child(`users/${uid}/todos`);
	        return todosRef.remove();
	      }, (err) => {
	      	console.log(err)
	      }).then(() => {
	        testTodoRef = todosRef.push();

	        return testTodoRef.set({
	          text: 'something',
	          completed: false,
	          createdAt: 12345
	        })
	      })
	      .then(() => done())
	      .catch(done);
	    });

	    afterEach((done) => {
	      todosRef.remove().then(() => done());
	    });

		// Below Requires Auth'd Firebase User
	    it('should create todo and dispatch ADD_TODO', (done) => {
	      const store = createMockStore({auth: {uid}});
	      const todoText = 'Test';

	      const action = actions.startAddTodo(todoText);

	      store.dispatch(action).then(() => {
	        const actions = store.getActions();
	        expect(actions[0]).toInclude({
	          type: 'ADD_TODO'
	        });

	        expect(actions[0].todo).toInclude({
	          text: todoText
	        });

	        done();
	      }).catch(done);
	    })

		// // When I call start add todos, I get my one todo back
		// // dispatch the startAddtodos action, then verify on the mock
		// // store the actions that were dispatched (addtodos, todosarray 1 item)
		// // also verify the text

		// it('when I startAddTodos, I get one back', (done) => {
		// 	const store = createMockStore({auth: {uid: uid}});
		// 	const action = actions.startAddTodos() // no args

		// 	store.dispatch(action).then(function(val) {
		// 		const mockActions = store.getActions();
		// 		expect(mockActions[0]).toEqual('ADD_TODOS');
		// 		expect(mockActions[0].todos.length).toEqual(1);
		// 		expect(mockActions[0].todos[0].text).toEqual('something');
		// 		}, done)
		// 	done()
		// 	})


		// it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
		// 	const store = createMockStore({auth: {uid: uid}});
		// 	const action = actions.startToggleTodo(testTodoRef.key, true);
		// 	store.dispatch(action).then(function(val) {
		// 		const mockActions = store.getActions();
		// 		expect(mockActions[0]).toInclude({
		// 			type: 'UPDATE_TODO',
		// 			id: testTodoRef.key,
		// 		})
		// 		expect(mockActions[0].updates).toInclude({
		// 			completed: true
		// 		})
		// 		expect(mockActions[0].updates.completedAt).toExist();
		// 		done()
		// 	}, done)
		// })
	})









})







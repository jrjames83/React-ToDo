import firebase, {firebaseRef, githubProvider} from 'app/firebase/index';
var moment = require('moment');
import uuid from 'node-uuid';


/*

Create 2 actions
type: LOGIN
uid: someuid

type: LOGOUT
no params

...then make an auth reducer that responds to login and logout
*/



export var login = (uid) => {
	return {
		type: 'LOGIN',
		uid: uid
	}
}

export var logout = () => {
	return {
		type: 'LOGOUT'	
	}

}



export var setSearchText = (searchText) => {
	return {
		type: 'SET_SEARCH_TEXT',
		searchText: searchText
	}
}

export var addTodo = (todo) => {
	return {
		type: 'ADD_TODO',
		todo: todo
	}
}

export var addTodos = (todos) => {
	return {
		type: 'ADD_TODOS', 
		todos: todos
	}
}

export var startAddTodos = () => {
	return (dispatch, getState) => {
		var uid = getState().auth.uid;
		var todosRef = firebaseRef.child(`users/${uid}/todos`);

		return todosRef.once('value').then(function(snapshot) {
			var todos = snapshot.val() || {};
			var parsedTodos = []; // redux expects an array
			//Converted todos to parsedTodos

			Object.keys(todos).forEach(function(val) {
				parsedTodos.push({
					id: val,
					...todos[val] // this is getting the otehr stuff for that key
				})
			})

			dispatch(addTodos(parsedTodos));
		})
	}

	// at the end dispatch addTodos with the todos
}

// My Edit Todo Action will do the following-----------
/*
	a) take the updated text
	b) get the current todoID
	c) update the text field in firebase
	d) call editTodo case which will update the redux store

*/

// Testing one specific to do - now just need to fix the id
export var startEditTodo = (id, text) => {
	return (dispatch, getState) => {
		var uid = getState().auth.uid;
		var todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
		var updates = {
			text: text
		}
		return todoRef.update(updates).then(function(value) {
			dispatch(editTodo(id, updates))
		}, function(er) {
			console.log(er);
		})
	} 
}

// There's a bug here, it references the incorrect id
export var startToggleTodo = (id, completed) => {
	console.log('Toggling todo', id, completed)
	return (dispatch, getState) => {
		var uid = getState().auth.uid;
		var todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
		var updates = {
			completed: completed,
			completedAt: completed ? moment().unix() : null
		}

		return todoRef.update(updates).then(function(val) {
			//dispatch action to update redux
			dispatch(updateTodo(id, updates))
		}, function(er) {
			console.log(er, updates);
		})
	}
}

export var startAddTodo = (text) => {
	return (dispatch, getState) => {
		var todo = {
					id: uuid(),
					text: text,
					completed: false,
					createdAt: moment().unix(),
					completedAt: null
				}
		// Now in firebase
		var uid = getState().auth.uid;	
		var todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);

		// we add the data to firebase here, but then still kickoff
		// The traditional call to addTodo, overiding the key with the FB
		// Provided key
		return todoRef.then(function(value) {
			dispatch(addTodo({
				...todo, // this will hit the addTodo which accepts diff data now
				id: todoRef.key
			}))
		})
	}
}


// toggleShowCompleted (just needs a type TOGGLE_SHOW_COMPLETED)
export var toggleShowCompleted = () => {
	return {
		type: 'TOGGLE_SHOW_COMPLETED'
	}
}

export var sortTodos = () => {
	return {
		type: 'SORT_TODOS'
	}
}

export var startLogin = () => {
	return (dispatch, getState) => {
		return firebase.auth().signInWithPopup(githubProvider).then((result) => {
			console.log(result, "auth worked");
		}, (err) => {
			console.log(err, "error occurred")
		})
	}
}

export var startLogout = () => {
	return (dispatch, getState) => {
		return firebase.auth().signOut().then(() => {
			console.log('Logged out')
		}, (err) => {
			console.log(err)
		})
	}
}


// toggleTodo(id) TOGGLE_TODO
/*
	Handle in firebase and pass down to state
*/
export var updateTodo = (id, updates) => {
	console.log(id, updates)
	return {
		type: 'UPDATE_TODO',
		id,
		updates: updates
	}
}


// toggleTodo(id) TOGGLE_TODO
export var editTodo = (id, updates) => {
	return {
		type: 'EDIT_TODO',
		id: id,
		updates: updates
	}
}
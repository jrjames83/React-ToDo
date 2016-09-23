import firebase, {firebaseRef} from 'app/firebase/index';
import moment from 'moment';
import uuid from 'node-uuid';


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
		var todoRef = firebaseRef.child(`/todos/${id}`);
		var updates = {
			text: text
		}
		return todoRef.update(updates).then(function(value) {
			console.log("Updated");
			dispatch(editTodo(id, updates))
		}, function(er) {
			console.log(er);
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
		var todoRef = firebaseRef.child('todos').push(todo);

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



// toggleTodo(id) TOGGLE_TODO
/*
	Handle in firebase and pass down to state
*/
export var toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id: id
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
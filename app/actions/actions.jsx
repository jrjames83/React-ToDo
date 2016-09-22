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
export var toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id: id
	}
}


// toggleTodo(id) TOGGLE_TODO
export var editTodo = (id, text) => {
	return {
		type: 'EDIT_TODO',
		id: id,
		text: text
	}
}
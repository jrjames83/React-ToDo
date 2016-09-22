var uuid = require('node-uuid');
var moment = require('moment');


// This will be for the search text box
export var searchTextReducer = (state = '', action) => {
	//action.something = 2; check that deep freeze fails test
	switch(action.type) {
		case 'SET_SEARCH_TEXT':
			return action.searchText;
		default:
			return state;
	}
}


// This will be for toggling all todos
export var showCompletedReducer = (state = false, action) => {
	switch(action.type) {
		case 'TOGGLE_SHOW_COMPLETED':
			return !state;
		default:
			return state;
	}
}


// This will be for sorting all todos, default state is false
export var sortTodoReducer = (state = false, action) => {
	switch(action.type) {
		case 'SORT_TODOS':
			return !state;
		default:
			return state;
	}
}

// This deals with adding and completing individual todos
export var todosReducer = (state = [], action) => {
	switch(action.type) {

		case 'ADD_TODO':
			return [
				...state,
				action.todo
			]
		
		// Toggling a specific todo's state
		case 'TOGGLE_TODO':

			return state.map(function(todo) {
				// action.id is coming off the action
    		if (todo.id === action.id) {
    			var nextCompleted = !todo.completed;

    			return {
    				...todo,

    				// Below we override
    				completed: nextCompleted,
    				completedAt: nextCompleted ? moment().unix() : undefined
    			}
    		} else {
    			return todo;
    		}
    	}) // end toggle


		case 'EDIT_TODO':
					return state.map(function(todo) {
						// action.id is coming off the action
		    		if (todo.id === action.id) {
		    			var updatedText = action.text

		    			return {
		    				...todo,
		    				// Below we override
		    				text: updatedText
		    				
		    			}
		    		} else {
		    			return todo;
		    		}
		    	}) // end toggle


			case 'ADD_TODOS':
				return [
					...state,
					...action.todos
				]

		default:
			return state;
	}
}



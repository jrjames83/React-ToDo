
export var setSearchText = (searchText) => {
	return {
		type: 'SET_SEARCH_TEXT',
		searchText: searchText
	}
}

export var addTodo = (text) => {
	return {
		type: 'ADD_TODO',
		text: text
	}
}

export var addTodos = (todos) => {
	return {
		type: 'ADD_TODOS', 
		todos: todos
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

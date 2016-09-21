var redux = require('redux');
var {searchTextReducer, showCompletedReducer, todosReducer, sortTodoReducer} = require('reducers');


export var configure = (initialState = {}) => {
	var reducer = redux.combineReducers({
		searchText: searchTextReducer,
		showCompleted: showCompletedReducer,
		todos: todosReducer,
		sort: sortTodoReducer
	});

	var store = redux.createStore(reducer, initialState, redux.compose(
			window.devToolsExtension ? window.devToolsExtension() : f => f
		));

	return store;
}
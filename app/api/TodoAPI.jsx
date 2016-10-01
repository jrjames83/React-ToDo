var $ = require('jquery');
var moment = require('moment');

// Would be nice to avoid duplicates

module.exports = {
	setTodos: function(todos) {
		if ($.isArray(todos)) {
			localStorage.setItem('todos', JSON.stringify(todos))
			return todos;
		}
	},

	getTodos: function() {
		var stringTodos = localStorage.getItem('todos');
		var todos = [];
		// JSON.parse (convert string to array)
		try {
			todos = JSON.parse(stringTodos)
		} catch (e) {
			// OK
		}
		return $.isArray(todos) ? todos : [];

	},

	// This does not interact with state, it just filters state
	filterTodos: function(todos, showCompleted, searchFilter, sorted) {
		var filterTodos = todos;

		// filter by showCompleted
		filterTodos = filterTodos.filter(function(val) {
			return !val.completed || showCompleted;
		})

		// filter by searchFilter
		filterTodos = filterTodos.filter(function(val) {
			return val.text.toLowerCase().includes(searchFilter.toLowerCase())
		})

		var rankings = {
			true: 0,
			false: 1
		}		

		// sort todos by putting imcomplete on list
		filterTodos.sort(function(a,b) {
			return rankings[b.completed] - rankings[a.completed]
		})

		// handle sorted by created at, using the sorted arg, which will be true if desired 

		if (sorted) {
			filterTodos.sort(function(a,b) {
				return b.createdAt - a.createdAt
			})
		}

		//Final Return
		return filterTodos
	}
};


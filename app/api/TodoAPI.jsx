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

	filterTodos: function(todos, showCompleted, searchFilter) {
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

		// sort todos - incomplete up on list
		filterTodos.sort(function(a,b) {
			return rankings[b.completed] - rankings[a.completed]
		})


		return filterTodos
	}
};


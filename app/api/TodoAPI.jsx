var $ = require('jquery');


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

		// sort todos - incomplete up on list


		return filterTodos
	}
};


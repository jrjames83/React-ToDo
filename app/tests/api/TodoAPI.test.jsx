var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
	beforeEach(() => {
		localStorage.removeItem('todos');
	})

	it('should exist', () => {
		expect(TodoAPI).toExist();
	})


	describe('setTodos', () => {
		it('should set valid todos array', () => {
			var todos = [{id:5, text:"Workout", completed: false}];
			TodoAPI.setTodos(todos); // local storage should be updated
			var actualTodos = JSON.parse(localStorage.getItem("todos"));
			expect(actualTodos).toEqual(todos);
		})

		it('should NOT set invalid todos array', () => {
			var badtodos = {a: "b"}
			TodoAPI.setTodos(badtodos); // local storage should be updated
			// need to clean-up local storage value
			expect(localStorage.getItem("todos")).toBe(null);
		})
	})



	describe('getTodos', () => {
		it('should return empty array for bad local storage data', () => {
			var actualTodos = TodoAPI.getTodos();
			expect(actualTodos).toEqual([]);
		})

		it('should return todos if valid array in local storage', () => {
			var todos = [{id:5, text:"Workout", completed: false}];
			localStorage.setItem("todos", JSON.stringify(todos));

			var actualTodos = TodoAPI.getTodos();
			expect(actualTodos).toEqual(todos)

		})
		
	})

	describe('filterTodos', () => {
		var todos = [
		{id:1, text:'Some text', completed: true},
		{id:2, text:'Some text here', completed: false},
		{id:3, text:'Some text there', completed: true},
		]

		it('should return all items if showCompleted is true', () => {
			var filterTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filterTodos.length).toBe(3);
		})

		it('should return some items if showCompleted is false', () => {
			var filterTodos = TodoAPI.filterTodos(todos, false, '');
			expect(filterTodos.length).toBe(1);
		})

		it('should sort by completed status', () => {
			var filterTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filterTodos[0].completed).toBe(false)
		})

		it('should filter todos by search text', () => {
			var filterTodos = TodoAPI.filterTodos(todos, true, 'zzz');
			expect(filterTodos.length).toBe(0)
		})

		it('should return all todos if search is empty', () => {
			var filterTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filterTodos.length).toBe(3)
		})			
	})
})











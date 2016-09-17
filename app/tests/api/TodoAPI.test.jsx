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
})
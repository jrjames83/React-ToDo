var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
    displayName: 'TodoList',
    render() {
    	var {todos} = this.props;

    	var renderTodos = () => {
    		return todos.map((todo) => {
    			return (
    				<Todo key={todo.id} {...todo} />
    				)
    		});
    	};
        return (
            <div>
			{renderTodos()}
            </div>
        );
    }
});

module.exports = TodoList;
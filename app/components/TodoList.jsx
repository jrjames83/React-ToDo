var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
    displayName: 'TodoList',

    render() {
    	var {todos} = this.props;

        // This.props.ontoggle is passed up to the parent
    	var renderTodos = () => {
            if (todos.length === 0) {
                return <p className="container_message">Nothing To Do</p>
            }
    		return todos.map((todo) => {
    			return (
    				<Todo key={todo.id} {...todo} onToggle={this.props.onToggle} />
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
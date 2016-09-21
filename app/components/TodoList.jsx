var React = require('react');
// var Todo = require('Todo');
import Todo from 'Todo'; // we want the connected version in our components
var {connect} = require('react-redux');
var TodoAPI = require('TodoAPI');


// We now have access to the store so we don't need
// to pass functions through props

export var TodoList = React.createClass({
    displayName: 'TodoList',

    render() {

    	var {todos, showCompleted, searchText, sort} = this.props;

        // This.props.ontoggle is passed up to the parent
    	var renderTodos = () => {
            if (todos.length === 0) {
                return <p className="container_message">Nothing To Do</p>
            } else {
        return TodoAPI.filterTodos(todos, showCompleted, searchText, sort).map((todo) => {
            return (
                    <Todo key={todo.id} {...todo} />
                )
        })
            }
    	};




        return (
            <div>
			{renderTodos()}
            </div>
        );
    }
});

export default connect(

    (state) => {
        return state; // get all items on state tree
    }

)(TodoList); // can now request data it wants
// Above, the todos object on state gets set as it
// it were a prop
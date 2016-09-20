var React = require('react');
var moment = require('moment');
var {connect} = require('react-redux');
var actions = require('actions');



export var Todo = React.createClass({
    displayName: 'Todo',
    handleCheck(e) {
    	console.log(e.target.value);
    },

    handleChange(e) {
        console.log(e.target.checked, this.props.id);
        this.props.onToggle(this.props.id)
    },

    render() {
    	var {text, id, completed, createdAt, completedAt, dispatch} = this.props;
        var todoClassname = completed ? 'todo todo-completed' : 'todo';
        var formatDate = (unixStamp) => {
            var currentMoment = moment.unix(unixStamp)
            return currentMoment.format("MMM, D, Y @ hh:ma");
        }
        var created_at = formatDate(createdAt)

        var renderTimeStamp = function() {
            if (completedAt > 0) {
                var message = "Completed: " + formatDate(completedAt)
            } else {
                var message = "Created: " + formatDate(createdAt)
            }
            return message;
        }


        return (

        <div className={todoClassname} onClick={() => {
            dispatch(actions.toggleTodo(id));
        }}>
        <div>
         <input type="checkbox" defaultChecked={completed} />	
        </div>
        <div>
          <p>{text}</p>
          <p className="todo_subtext">{renderTimeStamp()}</p>
        </div>
        </div>
        );
    }
});

export default connect()(Todo);// the dfeault is the somevar = require('something')

// Everything gets passed down from todolist

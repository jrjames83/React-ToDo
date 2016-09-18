var React = require('react');
var moment = require('moment');



var Todo = React.createClass({
    displayName: 'Todo',
    handleCheck(e) {
    	console.log(e.target.value);
    },

    handleChange(e) {
        console.log(e.target.checked, this.props.id);
        this.props.onToggle(this.props.id)
    },

    render() {
    	var {text, id, completed, createdAt, completedAt} = this.props;
        var todoClassname = completed ? 'todo todo-completed' : 'todo';
        var formatDate = (unixStamp) => {
            var currentMoment = moment.unix(unixStamp)
            return currentMoment.format("MMM, D, Y @ hh:ma");
        }
        var created_at = formatDate(createdAt)

        // Set a message variable and deal with it
        var renderTimeStamp = function() {
            if (completedAt > 0) {
                var message = "Completed: " + formatDate(completedAt)
            } else {
                var message = "Created: " + formatDate(createdAt)
            }
            return message;
        }


        return (

        <div className={todoClassname}>
        <div>
         <input type="checkbox" onChange={this.handleChange} 
                            defaultChecked={completed} />	
        </div>
        <div>
          <p>{text}</p>
          <p className="todo_subtext">{renderTimeStamp()}</p>
        </div>
        </div>
        );
    }
});

module.exports = Todo;
var React = require('react');
var moment = require('moment');
var {connect} = require('react-redux');
var actions = require('actions');



export var Todo = React.createClass({

    getInitialState() {
        return {
            editing: false
        };
    },

    editTodo(e) {
      console.log("you are trying to edit me")
      this.setState({
        editing: !this.state.editing  
      })
    },

    saveTodo(e,id) {
      console.log("you are trying to save me", id)
      this.setState({
        editing: !this.state.editing  
      })
      this.props.dispatch(actions.editTodo(id, this.refs.ptext.value))
      console.log(this.refs.ptext.value)
    },

    render: function() {
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

        var renderItem = () => {
          if(this.state.editing) {
            return <input type="text" placeholder={text} ref="ptext" />
          } else {
            return <p>{text}</p>
          }
        }

        var renderButton = () => {
          if(this.state.editing) {
            return <button onClick={() => { 
              var newText = this.refs.ptext.value;
              dispatch(actions.editTodo(id,newText))
              this.setState({editing: false}) 
            }} className="button tiny tiny_btn">Save Todo</button>
          } else if (this.props.completed) {
            return 
          } else {
            return <button className="button tiny tiny_btn" onClick={this.editTodo}>Edit</button>
          }
        }


    return (
      <div>
        <div className={todoClassname}> 
        <div>
         <input type="checkbox" defaultChecked={completed} onClick={() => {dispatch(actions.toggleTodo(id))}} />	
        </div>
        <div>
          {renderItem()}
          <p className="todo_subtext">{renderTimeStamp()}</p>
        </div>

        <div>
          {renderButton()}
        </div>

        </div>
      </div>
        );
    }
});

export default connect()(Todo);// the dfeault is the somevar = require('something')

// Everything gets passed down from todolist

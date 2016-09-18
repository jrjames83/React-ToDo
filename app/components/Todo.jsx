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
        var formatDate = (unixStamp) => {
            var currentMoment = moment.unix(unixStamp)
            return currentMoment.format("MMM, D, Y @ hh:ma");
        }
        var created_at = formatDate(createdAt)

        var renderTimeStamp = function() {
            return completedAt > 0 ? formatDate(completedAt) : formatDate(createdAt);
        }


        return (

        <div>
         <input type="checkbox" onChange={this.handleChange} 
                            defaultChecked={completed} />	
          {text} | {renderTimeStamp()}
        </div>
        );
    }
});

module.exports = Todo;
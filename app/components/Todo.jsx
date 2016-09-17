var React = require('react');

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
    	var {text, id, completed} = this.props;

        return (

        <div>
         <input type="checkbox" onChange={this.handleChange} 
                            defaultChecked={completed} />	
          {text}
        </div>
        );
    }
});

module.exports = Todo;
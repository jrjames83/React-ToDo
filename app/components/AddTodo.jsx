var React = require('react');


// Create a static component
// Take some text, when form is submitted
// call a function that gets passed in as a prop

var AddTodo = React.createClass({
    displayName: 'AddTodo',

    handleSubmit() {
    	var item = this.refs.query.value;
    	if (item.length > 0) {
    		this.props.addTodo(item);
    		this.refs.query.value = "";
    	}
    	
    },
    render() {
        return (
            <div>
            	<input type="text" ref="query" placeholder="add to do" />
            	<button className="button primary" onClick={this.handleSubmit}>Add</button>
            </div>
        );
    }
});

module.exports = AddTodo;
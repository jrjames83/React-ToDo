var React = require('react');

var Todo = React.createClass({
    displayName: 'Todo',
    render() {
    	var {text, id} = this.props;
        return (
            <div>
            	{text}
            </div>
        );
    }
});

module.exports = Todo;
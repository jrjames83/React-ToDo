var React = require('react');

var Todo = React.createClass({
    displayName: 'Todo',
    handleCheck(e) {
    	console.log(e.target.value);
    },
    render() {
    	var {text, id, completed} = this.props;
        
        return (
            <div onClick={ () => {
            	this.props.onToggle(id)
            	console.log(id)
            }}>

            <input type="checkbox" defaultChecked={completed} />
            	{text}
            
            </div>
        );
    }
});

module.exports = Todo;
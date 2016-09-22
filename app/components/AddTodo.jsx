var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

// Create a static component
// Take some text, when form is submitted
// call a function that gets passed in as a prop


// If you reference what's exported below
// You'll get the raw react comopnent, without any state
// rather than the connected component
export var AddTodo = React.createClass({
    displayName: 'AddTodo',

    handleSubmit() {
        var {dispatch} = this.props;
    	var item = this.refs.query.value;
    	if (item.length > 0) {
    		//this.props.addTodo(item);
            // This kicks off the firebase action
            // The firebase action then calls the addTodo action
            dispatch(actions.startAddTodo(item))
    		this.refs.query.value = "";
    	} else {
    		this.refs.query.focus();
    	}
    	
    },
    render() {
        return (
            <div className="container_footer">
            	<input type="text" ref="query" placeholder="add to do" />
            	<button className="button expanded" onClick={this.handleSubmit}>Add</button>
            </div>
        );
    }
});

// Since AddTodo doesn't need properties off of the state
export default connect()(AddTodo);


/*
The dispatch prop comes from the react-redux library. 
It gets added to our component because we passed the component through the 
connect function at the bottom of AddTodo.jsx. 
We don't manually define dispatch as a prop when rendering our components. 



*/
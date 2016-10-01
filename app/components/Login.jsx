var React = require('react');
var moment = require('moment');
var {connect} = require('react-redux');
var actions = require('actions');


var Login = React.createClass({
    displayName: 'Login',
    onLogin() {
    	var {dispatch} = this.props;
    	dispatch(actions.startLogin());
    },
    render() {
        return (
            <div>

            <h1 className="page-title">Todo App</h1>
            <div className="row">
            	<div className="columns small-centered small-10 medium-6 large-4">
            		<div className="callout callout-auth">
            			<h3>Login</h3>
            			<p>Login with Github Account</p>
            			<button className="button" 
            			onClick={this.onLogin}>Login with Github</button>
            		</div>
            	</div>
            </div>
            </div>
        );
    }
});

export default connect()(Login);
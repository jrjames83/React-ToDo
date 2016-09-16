var React = require('react');

var Search = React.createClass({
    displayName: 'Search',
    handleChange(event) {
    	//console.log(event.target.value);
    	this.props.sendFilter(event.target.value);
    },
    render() {
        return (
            <div>
              <input type="text" ref="query" placeholder="filter" 
              				onChange={this.handleChange} />
            </div>
        );
    }
});

module.exports = Search;
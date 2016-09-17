var React = require('react');

var Search = React.createClass({
    displayName: 'Search',

    handleChange(event) {
    	var showCompleted = this.refs.showCompleted.checked;
    	var searchText = this.refs.query.value;
    	console.log(event.target.value);
    	this.props.sendFilter(showCompleted, searchText);
    },
    render() {
        return (
            <div>
            <div>
              <input type="text" id="q" ref="query" placeholder="filter" 
              				onChange={this.handleChange} />
            </div>
            <div>
            	<label>
            	<input type="checkbox" ref="showCompleted" onChange={this.handleChange} />
            	Show completed
            	</label>
            </div>

            </div>
        );
    }
});

module.exports = Search;
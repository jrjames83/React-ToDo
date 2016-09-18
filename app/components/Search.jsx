var React = require('react');

var Search = React.createClass({
    displayName: 'Search',

    handleChange(event) {
    	var showCompleted = this.refs.showCompleted.checked;
    	var searchText = this.refs.query.value;
    	console.log(event.target.value);
    	this.props.sendFilter(showCompleted, searchText);
    },
    handleSort(e) {
        console.log(this.refs.sort.checked)
        this.props.doSort(this.refs.sort.checked) // why did I need an arbitrary param here?
    },
    render() {
        return (
            <div className="container_header">
                <p>Sort by created at</p>
                 <div>
                    <label>
                    <input type="checkbox" ref="sort" onChange={this.handleSort} />
                    Sort earliest to newest?
                    </label>
                </div>

                <div>
                  <input type="text" id="q" ref="query" placeholder="filter" onChange={this.handleChange} />
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
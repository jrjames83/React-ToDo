var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');



export var Search = React.createClass({
    displayName: 'Search',

    render() {
        var {dispatch, showCompleted, searchText} = this.props;

        return (
            <div className="container_header">
                <p>Sort by created at</p>
                 <div>
                    <label>
                    <input type="checkbox" ref="sort" />
                    Sort earliest to newest?
                    </label>
                </div>

                <div>
                  <input type="search" id="q" ref="searchText" 
                        value={searchText} placeholder="filter" onChange={() => {
                            dispatch(actions.setSearchText(this.refs.searchText.value))
                        }} />
                </div>
                
                <div>
                	<label>
                	<input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
                            dispatch(actions.toggleShowCompleted()) }}/>
                	Show completed
                	</label>
                </div>


            </div>
        );
    }
});

export default connect(

// Provides access to these on props
    (state) => {
        return {
            showCompleted: state.showCompleted,
            searchText: state.searchText
        }
    }

)(Search);
// Need to change the thingy here
// Do
import React from 'react';
import SearchBox from './SearchBox.jsx';
import SearchResult from './SearchResult.jsx';

export default class SearchPanel extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			items : []
		}

		this.setResults = this.setResults.bind(this);
	}

	setResults(res){
		this.setState({items : res});
	}

	render(){
		return (
			<div>
				<SearchBox setResults={this.setResults} />
				<SearchResult items={this.state.items} />
			</div>
			)
	}
}
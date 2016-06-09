import React from 'react';
import ResultItem from './ResultItem.jsx';
import {GridList, GridTile} from 'material-ui/GridList';

export default class SearchResult extends React.Component{
	
	constructor(props){
		super(props);

	}

	render(){
		return (
			<div>
				{this.props.items.map((item) => {
					return <ResultItem item={item} />
				})}				
			</div>
			)
	}
}
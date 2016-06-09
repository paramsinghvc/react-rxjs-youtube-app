import React from 'react';
import {Card, CardHeader, CardTitle, CardActions, CardMedia, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

export default class ResultItem extends React.Component{

	constructor(props){
		super(props);
	}
	render(){
		return (
			<Card>
				<CardMedia overlay={<CardTitle title={this.props.item.snippet.title} subtitle="subtitle" />}>
					<img src={this.props.item.snippet.thumbnails.high.url} />
				</CardMedia>
				<CardText>
					  {this.props.item.snippet.description}
				</CardText>
				<CardActions>
					<RaisedButton label="Watch" secondary={true}/>
				</CardActions>
			</Card>
			)
	}

}
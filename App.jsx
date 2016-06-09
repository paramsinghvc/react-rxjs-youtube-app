import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { Grid, Col, Row } from 'react-bootstrap';

import SearchPanel from './components/SearchPanel.jsx';

export default class App extends React.Component{
	render(){		
		return (
			<div>				
			   	<AppBar title="Search" />	
			   	<Grid>
				    <Row className="show-grid">
				    	<SearchPanel></SearchPanel>
				    </Row>
			  	</Grid>							
			</div>
			)
	}
}
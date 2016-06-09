import React from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import Rx from 'rxjs/Rx'; 

export default class SearchBox extends React.Component{

	constructor(){
		super()
		this.API_KEY= 'AIzaSyBiad0BKYHjoLLCj5FDxhuUrWdyLA2SrS8';		
		// this.searchText = this.searchText.bind(this);
		this.searchYoutube = this.searchYoutube.bind(this);
		this.searchYoutubeObservable = this.searchYoutubeObservable.bind(this);
	}

	searchYoutube(term){
		console.log(term);
		return $.get('https://www.googleapis.com/youtube/v3/search', {
			part : 'snippet',
			maxResults : 10,
			q : term,
			type : 'video',
			key : this.API_KEY
		})
	}

	searchYoutubeObservable(term){
		return Rx.Observable.fromPromise(this.searchYoutube(term))
	}

	componentDidMount() {		
		
	    	Rx.Observable.fromEvent(ReactDOM.findDOMNode(this.refs.searchTextBox.input), 'keyup')
				.map((e) => {					
					return e.target.value
				})
				.filter(val => val.length > 2)
				.distinctUntilChanged()
				.flatMap(this.searchYoutubeObservable)
				.subscribe((res) => {
					console.log(res)
					this.props.setResults(res.items);
				})
	}

	render(){
		return (
			<div>
				<TextField floatingLabelText="Search" ref="searchTextBox" style={{width : '100%', marginBottom : 20}}/>
			</div>
			)
	}
}
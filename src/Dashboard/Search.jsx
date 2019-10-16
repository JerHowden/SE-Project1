import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import './Search.css';

export class Search extends Component {

	constructor(props) {
		super(props)

		this.search = this.search.bind(this)

		this.state = {
			search: ""
		}
	}

	search(e) {
		this.setState({ search: e.target.value })
	}

	render() {

		return ( 
			<div>
				<input
					id='searchInput'
					type='text' 
					placeholder='Find a Location'
					onChange={this.search}
				/>
			</div>
		)

	}

}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyBbtQVWV6W90rXN8wIHpj0FjF1uqD0ov00'
})(Search)

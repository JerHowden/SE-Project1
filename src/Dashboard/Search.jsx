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

	componentDidMount() {
		console.log(this.props.google)
	}

	search(e) {
		this.setState({ search: e.target.value }, () => {

			let request = {
				query: this.state.search,
				fields: ['formatted_address', 'geometry', 'icon', 'name', 'permanently_closed', 'photos', 'place_id', 'plus_code', 'types'],
				locationBias: { lat: this.props.latitude, lng: this.props.longitude }
			}
			let service = new this.props.google.maps.places.PlacesService(document.createElement('div'))
			service.findPlaceFromQuery(request, (results, status) => {
				if (status === this.props.google.maps.places.PlacesServiceStatus.OK) {
					console.log("Results:", results)
					this.props.setMarkerLocations(results)
				}
			})
		})
	}

	render() {

		return ( 
			<div>
				<input
					id='searchInput'
					type='text' 
					placeholder='Find a Location'
					onChange={this.search}
					value={this.state.search}
				/>
			</div>
		)

	}

}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyBbtQVWV6W90rXN8wIHpj0FjF1uqD0ov00'
})(Search)

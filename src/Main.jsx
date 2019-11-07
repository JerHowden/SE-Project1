import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

import Today from './Dashboard/Today';
import Location from './Dashboard/Location';
import Search from './Dashboard/Search';
import Weather from './Dashboard/Weather';
import Settings from './Dashboard/Settings';

export class Main extends Component {

	constructor(props) {
		super(props)

		this.initMap = this.initMap.bind(this)
		this.changeLocation = this.changeLocation.bind(this)
		this.findLocation = this.findLocation.bind(this)

		this.state = {
			apiKey: 'AIzaSyBbtQVWV6W90rXN8wIHpj0FjF1uqD0ov00',
			pos: {
				lat: 33.576698,
				lng: -101.855072
			},
		}

	}

	componentDidMount() {
		this.initMap()
	}

	initMap() {

		// Try HTML5 geolocation.
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				let pos = {
					lat: position.coords.latitude, 
					lng: position.coords.longitude
				};
								
				this.setState({ pos }, () => console.log(this.state))
			}.bind(this))
		} else {
			console.log("error");
		}
	}

	changeLocation(lat, lng) {
		this.setState({ pos: { lat, lng }})
	}

	findLocation(mapProps, map) {
		console.log("MapProps:", mapProps)
		console.log("Map:", map)
	}

	render() {
		return(
			<div>
				{/* <  Location/>
				<Weather/>
				<Settings/>*/}
				<Today/>
				<Search
					lat={this.state.pos[0]} 
					lng={this.state.pos[1]}
					apiKey={this.state.apiKey}
					changeLocation={this.changeLocation}
				/>

				<Weather/>

				<Map
					id="map"

					google={this.props.google} 
					clickableIcons={true}
					onClick={this.onMapClicked}
					initialCenter={this.state.pos}
					center={this.state.pos}
					onDragend={this.findLocation}
					onZoomChanged={this.findLocation}
				>
					<Marker 
						onClick={this.onMarkerClick}
						name={'Your Current location'}
						position={this.state.pos}
					/>
					<InfoWindow
						position={this.state.pos}
					>
						<div>
							Info Window
						</div>
					</InfoWindow>
				</Map>
			</div>
		)
	}

}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyBbtQVWV6W90rXN8wIHpj0FjF1uqD0ov00'
})(Main)
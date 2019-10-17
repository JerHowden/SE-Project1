import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

import Today from './Dashboard/Today';
import Location from './Dashboard/Location';
import Search from './Dashboard/Search';
import Weather from './Dashboard/Weather';
import Settings from './Dashboard/Settings';

export default class Main extends Component {

	constructor(props) {
		super(props)

		this.initMap = this.initMap.bind(this)
		this.changeLocation = this.changeLocation.bind(this)
		this.setMarkerLocations = this.setMarkerLocations.bind(this)

		this.state = {
			apiKey: 'AIzaSyBbtQVWV6W90rXN8wIHpj0FjF1uqD0ov00',
			
			width: window.innerWidth,
			height: window.innerHeight,
			latitude: 33.576698,
			longitude: -101.855072,
			zoom: 11,

			markerLocations: []
		}

	}

	componentDidMount() {
		this.initMap()
	}

	initMap() {

		// Try HTML5 geolocation.
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {								
				this.setState({ 
					latitude: position.coords.latitude, 
					longitude: position.coords.longitude 
				}, () => console.log(this.state))
			}.bind(this))
		} else {
			console.log("error");
		}
	}

	changeLocation(latitude, longitude) {
		this.setState({ latitude, longitude })
	}

	setMarkerLocations(markerLocations) {
		this.setState({ markerLocations }, () => console.log(this.state.markerLocations))
	}

	render() {
		return(
			<div>
				{/* <  Location/>
				<Weather/>
				<Settings/>*/}
				<Today/>
				<Search
					latitude={this.state.latitude} 
					longitude={this.state.longitude}
					changeLocation={this.changeLocation}
					setMarkerLocations={this.setMarkerLocations}
				/>
				<ReactMapGL
					mapboxApiAccessToken={'pk.eyJ1IjoiamVyZW1pYWhob3dkZW4iLCJhIjoiY2sxdG02dHA3MDg0ajNicWZzcDlscGhjdyJ9.j2t6Mr4EpeTpm-4Uz7kszg'}
					mapStyle='mapbox://styles/mapbox/dark-v10'

					width={this.state.width}
					height={this.state.height}
					latitude={this.state.latitude}
					longitude={this.state.longitude}
					zoom={this.state.zoom}
					onViewportChange={(viewport) => {
						const { width, height, latitude, longitude, zoom } = viewport;
						this.setState({
							width, height, latitude, longitude, zoom
						})
					}}
				>
					{this.state.markerLocations.map(marker => {
						return(
							<Marker
								key={marker.place_id}
								latitude={marker.geometry.location.lat()}
								longitude={marker.geometry.location.lng()}
							>
								{marker.name}
							</Marker>
						)
					})}
				</ReactMapGL>
			</div>
		)
	}

}

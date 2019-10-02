import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

import Date from './Dashboard/Date';
import Location from './Dashboard/Location';
import Search from './Dashboard/Search';
import Weather from './Dashboard/Weather';
import Settings from './Dashboard/Settings';

export class Main extends Component {

	constructor(props) {
		super(props)

		this.state = {
			apiKey: 'AIzaSyBbtQVWV6W90rXN8wIHpj0FjF1uqD0ov00',
		}
	}

	let map, infoWindow;
	function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
			center: { lat: -34.397, lng: 150.644 },
			zoom: 6
		});
		infoWindow = new google.maps.InfoWindow;

		// Try HTML5 geolocation.
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				let pos = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				};

				infoWindow.setPosition(pos);
				infoWindow.setContent('Location found.');
				infoWindow.open(map);
				map.setCenter(pos);
			}, function () {
				handleLocationError(true, infoWindow, map.getCenter());
			});
		} else {
			// Browser doesn't support Geolocation
			handleLocationError(false, infoWindow, map.getCenter());
		}
	}

	function handleLocationError(browserHasGeolocation, infoWindow, pos) {
		infoWindow.setPosition(pos);
		infoWindow.setContent(browserHasGeolocation ?
			'Error: The Geolocation service failed.' :
			'Error: Your browser doesn\'t support geolocation.');
		infoWindow.open(map);
	}



	render() {
		return(
			<div>
				<Map 
					google={this.props.google} 
					zoom={14}
					initialCenter={{
						lat: 33.5779,
						lng: -101.8552
					}}
				>
					<Marker onClick={this.onMarkerClick}
						name={'Current location'} />

				</Map>
				<Location/>
				<Weather/>
				<Settings/>
				<Search/>
				<Date/>
			</div>
		)
	}

}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyBbtQVWV6W90rXN8wIHpj0FjF1uqD0ov00'
})(Main)
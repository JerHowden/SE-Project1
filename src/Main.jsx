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
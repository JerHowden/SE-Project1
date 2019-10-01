import React from 'react';
import Main from './Main';
import './App.css';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


export class App extends React.Component {
	render() {
		return (
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
		);
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyBbtQVWV6W90rXN8wIHpj0FjF1uqD0ov00'
})(App)

import React, {Component} from 'react';
import {Map,InfoWindow,Marker,GoogleApiWrapper} from 'google-maps-react';
import './Search.css';

export class Search extends Component {

  constructor(props) {
    super(props)

    this.initAutocomplete = this.initAutocomplete.bind(this)

    this.state = {
      pos: {
        lat: this.props.lat,
        lng: this.props.lng
      },

      locationData: []

    }
  }

  componentDidMount() {
    this.initAutocomplete()
  }

  initAutocomplete() {

      var map = new this.props.google.maps.Map(document.getElementById('map'), {
        center: {
          lat: this.state.lat,
          lng: this.state.lng
        },
        zoom: 13,
        mapTypeId: 'roadmap'
      });

      // Create the search box and link it to the UI element.
      var input = document.getElementById('pac-input');
      var searchBox = new this.props.google.maps.places.SearchBox(input);
      map.controls[this.props.google.maps.ControlPosition.TOP_LEFT].push(input);

      // Bias the SearchBox results towards current map's viewport.
      map.addListener('bounds_changed', function () {
        searchBox.setBounds(map.getBounds());
      });

      var markers = [];
      // Listen for the event fired when the user selects a prediction and retrieve
      // more details for that place.
      searchBox.addListener('places_changed', function() {
        var places = searchBox.getPlaces();

        if (places.length === 0) {
          return;
        }
        else{
          this.setState({locationData: JSON.parse(JSON.stringify(places))})

          console.log('Location: ' + JSON.stringify(this.state.locationData[0].formatted_address))
          console.log('Coords: ' + JSON.stringify(this.state.locationData[0].geometry.location)) 
          
          this.setState({
            pos:{
              lat: this.state.locationData[0].geometry.location.lat, //set state of new lat and long from the json
              lng: this.state.locationData[0].geometry.location.lng  //combine search and main to set the same locale in the same component? 
            }
          })

          this.props.changeLocation(this.state.pos.lat, this.state.pos.lng);
        }

        // Clear out the old markers.
        markers.forEach(marker => {
          marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        var bounds = new this.props.google.maps.LatLngBounds(); 
        places.forEach(place => {
          if (!place.geometry) {
            console.log("Returned place contains no geometry");
            return;
          }
          var icon = {
            url: place.icon,
            size: new this.props.google.maps.Size(71, 71),
            origin: new this.props.google.maps.Point(0, 0),
            anchor: new this.props.google.maps.Point(17, 34),
            scaledSize: new this.props.google.maps.Size(25, 25)
          };

          // Create a marker for each place.
          markers.push(new this.props.google.maps.Marker({
            map: map,
            icon: icon,
            title: place.name,
            position: place.geometry.location
          }));

          if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
        });
        map.fitBounds(bounds);
      }.bind(this));
    }

  render() {

      return ( 
        <div>
            <input 
				id='pac-input' 
				className='controls' 
				type='text' 
				placeholder='Find a Location'
			/>
            <div id='map'/>	
        </div>
      )

  }

}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBbtQVWV6W90rXN8wIHpj0FjF1uqD0ov00'
})(Search)

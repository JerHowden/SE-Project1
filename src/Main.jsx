import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

import Today from './Dashboard/Today';
import Search from './Dashboard/Search';
import Weather from './Dashboard/Weather';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator, faPlane, faChessRook, faFish, faPalette, faMoneyBillWave, faBreadSlice, faMoneyCheck, faBeer, faUniversity, faBicycle, faBook, faBowlingBall, faBus, faCoffee, faCampground, faCar, faTaxi, faCarCrash, faAirFreshener, faDice, faChurch, faTshirt, faGasPump, faHospital, faGavel, faBookOpen, faPlaceOfWorship, faTree, faParking, faPlaneDeparture, faPaw, faTrain, faBinoculars, faSynagogue, faShoppingCart, faShoppingBag, faDumbbell, faTools, faGopuram, faWarehouse, faSchool, faSpa, faShoePrints, faStore, faBoxes, faUtensils, faMailBulk, faShieldAlt, faToilet, faDog, faTooth, faUserMd, faPrescriptionBottle, faPlug, faFlag, faFireExtinguisher, faSeedling, faBookDead, faCouch, faBuilding, faBiking, faPrescription, faHome, faSubway, faHippo, faPaintRoller, faGlassCheers, faMonument, faLandmark, faStoreAlt, faCut, faHouseDamage, faGem, faWineBottle, faLock, faHotel, faTicketAlt, faTruckMonster, faTruckMoving, faCompactDisc, faArchway} from '@fortawesome/free-solid-svg-icons'

import './Main.css'

export class Main extends Component {

	constructor(props) {
		super(props)

		this.initMap = this.initMap.bind(this)
		this.changeLocation = this.changeLocation.bind(this)
		this.onMarkerClick = this.onMarkerClick.bind(this)
		this.icon = this.icon.bind(this)

		this.state = {
			apiKey: 'AIzaSyBbtQVWV6W90rXN8wIHpj0FjF1uqD0ov00',
			pos: {
				lat: 33.576698,
				lng: -101.855072
			},
			markerData: null
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
								
				this.setState({ pos })
			}.bind(this))
		} else {
			console.log("error");
		}
	}

	changeLocation(lat, lng, data) {
		this.setState({ 
			pos: { lat, lng },
			markerData: data
		})
	}

	onMarkerClick(props, marker, e) {
		// console.log(props, marker, e)
		if(this.state.markerData) {
			this.setState({
				showingInfoWindow: true
			}, () => console.log(this.state))
		}
	}

	icon(type) {
		switch(type) {
			case 'accounting': return faCalculator
			case 'airport': return faPlane
			case 'amusement_park': return faChessRook
			case 'aquarium': return faFish
			case 'art_gallery': return faPalette
			case 'atm': return faMoneyBillWave
			case 'bakery': return faBreadSlice
			case 'bank': return faMoneyCheck
			case 'bar': return faBeer
			case 'beauty_salon': return faSpa
			case 'bicycle_store': return faBicycle
			case 'book_store': return faBook
			case 'bowling_alley': return faBowlingBall
			case 'bus_station': return faBus
			case 'cafe': return faCoffee
			case 'campground': return faCampground
			case 'car_dealer': return faCar
			case 'car_rental': return faTaxi
			case 'car_repair': return faCarCrash
			case 'car_wash': return faAirFreshener
			case 'casino': return faDice
			case 'cemetery': return ''
			case 'church': return faChurch
			case 'city_hall': return faLandmark
			case 'clothing_store': return faTshirt
			case 'convenience_store': return faStoreAlt
			case 'courthouse': return faGavel
			case 'dentist': return faTooth
			case 'department_store': return faBuilding
			case 'doctor': return faUserMd
			case 'drugstore': return faPrescriptionBottle
			case 'electrician': return faPlug
			case 'electronics_store': return faPlug
			case 'embassy': return faFlag
			case 'fire_station': return faFireExtinguisher
			case 'florist': return faSeedling
			case 'funeral_home': return faBookDead
			case 'furniture_store': return faCouch
			case 'gas_station': return faGasPump
			case 'grocery_or_supermarket': return faShoppingBag
			case 'gym': return faDumbbell
			case 'hair_care': return faCut
			case 'hardware_store': return faTools
			case 'hindu_temple': return faGopuram
			case 'home_goods_store': return faWarehouse
			case 'hospital': return faHospital
			case 'insurance_agency': return faHouseDamage
			case 'jewelry_store': return faGem
			case 'laundry': return ''
			case 'lawyer': return faGavel
			case 'library': return faBookOpen
			case 'light_rail_station': return ''
			case 'liquor_store': return faWineBottle
			case 'local_government_office': return faLandmark
			case 'locksmith': return faLock
			case 'lodging': return faHotel
			case 'meal_delivery': return ''
			case 'meal_takeaway': return ''
			case 'mosque': return faPlaceOfWorship
			case 'movie_rental': return faCompactDisc
			case 'movie_theater': return faTicketAlt
			case 'moving_company': return faTruckMoving
			case 'museum': return faMonument
			case 'night_club': return faGlassCheers
			case 'painter': return faPaintRoller
			case 'park': return faTree
			case 'parking': return faParking
			case 'pet_store': return faDog
			case 'pharmacy': return faPrescription
			case 'physiotherapist': return faBiking
			case 'plumber': return faToilet
			case 'police': return faShieldAlt
			case 'post_office': return faMailBulk
			case 'primary_school': return faSchool
			case 'real_estate_agency': return faHome
			case 'restaurant': return faUtensils
			case 'roofing_contractor': return ''
			case 'rv_park': return ''
			case 'school': return faSchool
			case 'secondary_school': return faSchool
			case 'shoe_store': return faShoePrints
			case 'shopping_mall': return faShoppingBag
			case 'spa': return faSpa
			case 'stadium': return ''
			case 'storage': return faBoxes
			case 'store': return faStore
			case 'subway_station': return faSubway
			case 'supermarket': return faShoppingCart
			case 'synagogue': return faSynagogue
			case 'taxi_stand': return faTaxi
			case 'tourist_attraction': return faBinoculars
			case 'train_station': return faTrain
			case 'transit_station': return faTrain
			case 'travel_agency': return faPlaneDeparture
			case 'university': return faUniversity
			case 'veterinary_care': return faPaw
			case 'zoo': return faHippo

			default:
				return ''
		}
	}

	render() {
		return(
			<div>
				<div id="TopContainer">
					<Today/>
					<Search
						lat={this.state.pos[0]} 
						lng={this.state.pos[1]}
						apiKey={this.state.apiKey}
						changeLocation={this.changeLocation}
					/>
					<Weather
						lat = {this.state.pos.lat}
						lng = {this.state.pos.lng}
					/>
				</div>
				<Map
					id="map"
					ref={(reactMap) => this.reactMap = reactMap}
					google={this.props.google} 
					clickableIcons={true}
					onClick={() => this.setState({ showingInfoWindow: false })}
					initialCenter={this.state.pos}
					center={this.state.pos}
				>
					<Marker 
						onClick={this.onMarkerClick}
						position={this.state.pos}
					/>
				</Map>
				{this.state.showingInfoWindow && this.state.markerData ?
					<div id="BottomContainer">
						<div className="column">
							<h1>{this.state.markerData.name}</h1>
							<div>
								{this.state.markerData.types.map(type => {
									let i = this.icon(type)
									if(i)
										return <FontAwesomeIcon className="infoIcon" key={i} icon={i}/>
									else return null
								})}
							</div>
						</div>
						<div className="column">
							<div>{this.state.markerData.formatted_address}</div>
							<div>{this.state.markerData.formatted_phone_number}</div>
						</div>
					</div>
				:
					null
				}
			</div>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyBbtQVWV6W90rXN8wIHpj0FjF1uqD0ov00'
})(Main)

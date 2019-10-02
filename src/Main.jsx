import React, { Component } from 'react';
import Date from './Dashboard/Date';
import Location from './Dashboard/Location';
import Search from './Dashboard/Search';
import Weather from './Dashboard/Weather';
import Settings from './Dashboard/Settings';

export default class Main extends Component {

	constructor(props) {
		super(props)

		this.state = {

		}
	}

	render() {
		return(
			<div>
				<Location/>
				<Weather/>
				<Settings/>
				<Search/>
				<Date/>
			</div>
		)
	}

}
import React, { Component } from 'react';

export default class Weather extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pos:{
                lat: this.props.lattitude,
                long: this.props.longitude
            }
        }
    }

    render() {
        return (
            <div>
                Weather
			</div>
        )
    }

}
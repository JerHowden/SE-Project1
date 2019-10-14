import React, { Component } from 'react';
import moment from 'moment';
import './Today.css';

export default class Today extends Component {

    constructor(props) {
        super(props)

        this.state = {
            date: moment()
        }
    }

    render() {

        return (
            <div className="DateContainer">
                <div id="DayOfWeek">
                    {this.state.date.format("dddd")}
                </div>
                <div id="Date">
                    {this.state.date.format("MMMM Mo")}
                </div>
			</div>
        )
    }

}
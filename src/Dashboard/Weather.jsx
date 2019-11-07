import React, { Component } from 'react';


// api_key = b770ccb72e369016d44a8b100dec380d
export default class Weather extends Component {

    async getWeather(){
        
        const url = "http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=b770ccb72e369016d44a8b100dec380d"
        const response = await fetch(url)
        const data = await response.json()
        this.setState({weather:{temperature:data.main.temp}})
        console.log(data.main.temp)
    }
    componentDidMount(){
        this.getWeather()
    }

    constructor(props) {
        super(props)

        this.state = {
            pos:{
                lat: this.props.lattitude,
                lon: this.props.longitude
            },
            weather:{
                temperature: null //just make this the one for Lubbock
            }
        }
    }

    render() {
        return (
            <div className = ".WeatherContainer">
            <div id = "#Temperature"> 
            {this.state.weather.temperature}
            </div>
            </div>
        )
    }

}
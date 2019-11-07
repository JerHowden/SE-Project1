import React, { Component } from 'react';
import axios from 'axios';
import './Weather.css';

// api_key = b770ccb72e369016d44a8b100dec380d
export default class Weather extends Component {

    // async getWeather(){
        
    //     const url = "http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=b770ccb72e369016d44a8b100dec380d"
    //     const response = await fetch(url)
    //     const data = await response.json()
    //     this.setState({weather:{temperature:data.main.temp}})
    //     console.log(data.main.temp)
        
    //     console.log(this.state.pos)
    // }
    constructor(props) {
        super(props)

        this.state = {

            pos:{
                lat: this.props.lat,
                lng: this.props.lng
            },

            weather: []
        }
    } 
    
    componentDidMount(){
        axios.get('http://api.openweathermap.org/data/2.5/weather?lat=' + this.state.pos.lat + '&lon=' + this.state.pos.lng + '&APPID=b770ccb72e369016d44a8b100dec380d')
            .then(response => {
                this.setState({weather: response})
                console.log(response)
            })
            .catch(error =>{
                console.log(error)
            })
    }

    render() {
        return (
            <div className = ".WeatherContainer">
                <div id = "Temperature"> 
                    {this.state.weather.temperature}
            </div>
            </div>
        )
    }

}
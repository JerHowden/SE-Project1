import React, { Component } from 'react';
import axios from 'axios';
import './Weather.css';

// api_key = b770ccb72e369016d44a8b100dec380d
export default class Weather extends Component {

    constructor(props) {
        super(props)

        this.kToF = this.kToF.bind(this)

        this.state = {
            weather: {}
        }
    } 

    kToF(k) {
        return (k - 273.15) * (9/5) + 32;
    }

    componentWillReceiveProps(nextProps){
        if(nextProps !== this.props) {
            axios.get('http://api.openweathermap.org/data/2.5/weather?lat=' + nextProps.lat + '&lon=' + nextProps.lng + '&APPID=b770ccb72e369016d44a8b100dec380d')
                .then(response => {
                    this.setState({weather: response.data}, () => console.log(this.state, this.state.weather.main.temp))
                    console.log(response)
                })
                .catch(error =>{
                    console.log(error)
                })
        }
    }

    render() {
        return (
            <div className="WeatherContainer">
                {this.state.weather.main ? 
                    <div>
                        <img 
                            src={"http://openweathermap.org/img/wn/" + this.state.weather.weather[0].icon + "@2x.png"} 
                            alt={this.state.weather.weather[0].main} 
                            width={100}
                            height={100}    
                            style={{
                                position: 'absolute',
                                top: -15,
                                right: 55
                            }}
                        />
                        <div id="Temperature">
                            {Math.round(this.kToF(this.state.weather.main.temp))}
                            <span>°F</span>
                        </div>
                        <div id="MinMax">
                            <span>{Math.round(this.kToF(this.state.weather.main.temp_max))}</span>
                            <span>{Math.round(this.kToF(this.state.weather.main.temp_min))}</span>
                        </div>
                    </div>
                :
                    null
                }
            </div>
        )
    }

}
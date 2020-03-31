import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import 'react-open-weather/lib/css/ReactWeather.css';
import './weather.css';

export const Weather = (props) => {
    const [weather, setWeather] = useState();
    const defaultCity = "Omaha,US";
    const [city, setCity] = useState(defaultCity);
  
    useEffect(() => {
      Axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city?city:defaultCity}&appid=5f24adf9b82f6919270d8d3e8abefcc3&units=imperial&mode=html`)
      .then(data => {
        setWeather(data.data)
      });
    },[city]);
  
    // <></> is a new(ish) shorthand for <React.Fragment></React.Fragment>
    return (
     <div className="Weather_App">
        <Container>
          <Row>
            <Col>
              <h3 className="App_weather_txt">Input City</h3>
              <input placeholder="Ex: Iowa City,US" onBlur={e => setCity(e.target.value)}></input>
              <div className="App_weather_txt">change happens on input blur.</div>
            </Col>
            <Col>
              <h3 className="App_weather_txt">Today's Weather</h3>
              <div className="App_weather_component"
                dangerouslySetInnerHTML={{
                  __html: weather
                }}>
              </div>
            </Col>
          </Row>
        </Container>
     </div>
   );
};

export default Weather;
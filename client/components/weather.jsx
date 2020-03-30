import React from 'react';
import ReactWeather from 'react-open-weather';
//Optional include of the default css styles
import 'react-open-weather/lib/css/ReactWeather.css';
import './weather.css';

export const Weather = (props) => {
    const [data, setData] = React.useState();
  
    // with an empty array passed (like we're doing) it just means this gets called once
    // on the initial component render, then never again.
    React.useEffect(() => {
      // do some api call then call setData()
      // axios.get(...).then(data => setData(data));
    },[]);
  
    // <></> is a new(ish) shorthand for <React.Fragment></React.Fragment>
    // but I can't use it with the current version of babel I have
    return (
     <div className="Weather_App">
        <h3 className="Weather_App_txt">Today's Weather</h3>
        <ReactWeather forecast="today" apikey="5f24adf9b82f6919270d8d3e8abefcc3" type="city" />
     </div>
   );
};

export default Weather;
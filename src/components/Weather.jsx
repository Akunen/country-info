import { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherInfo = ({ capital }) => {
  const [weather, setWeather] = useState(null);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&units=metric`)
      .then((response) => {
        setWeather(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  }, [capital, apiKey]);

  return (
    <div>
      {weather && (
        <div>
          <h2>Weather in {capital}</h2>
          <p>Temperature: {weather.main.temp} Celsius</p>
          <p><img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" /></p>
          <p>Wind: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;

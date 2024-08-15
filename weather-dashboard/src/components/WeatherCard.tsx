import React, { useState } from 'react';

interface WeatherCardProps {
  data: any;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  const [isCelsius, setIsCelsius] = useState<boolean>(true);

  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  const convertTemperature = (temp: number): number => {
    return isCelsius ? temp : (temp * 9/5) + 32;
  };

  return (
    <div className="weather-card">
      <h2>{data.name}</h2>
      <p>{data.weather[0].description}</p>
      <p>
        Temperature: {convertTemperature(data.main.temp)}°{isCelsius ? 'C' : 'F'}
      </p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
      <button onClick={toggleTemperatureUnit}>
        Toggle to {isCelsius ? 'Fahrenheit' : 'Celsius'}
      </button>
    </div>
  );
};

export default WeatherCard;

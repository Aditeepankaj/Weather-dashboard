import React, {useState} from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard';
import WeatherForm from './components/WeatherForm';

const App: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<any>(null);
  
  const handleFetchWeather = (data: any) => {
    setWeatherData(data);
  };

  return (
    <div className="app">
      <h1>Weather Dashboard</h1>
      <WeatherForm setCity={setCity} onFetchWeather={handleFetchWeather} />
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
};


export default App;

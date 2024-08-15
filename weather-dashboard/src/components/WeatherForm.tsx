import React, { useState } from 'react';
import axios from 'axios';

interface WeatherFormProps {
  setCity: (city: string) => void;
  onFetchWeather: (data: any) => void;
}

const WeatherForm: React.FC<WeatherFormProps> = ({ setCity, onFetchWeather }) => {
  const [input, setInput] = useState<string>('');
  const [error, setError] = useState<string | null>(null); // State to manage error message

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCity(input);

    try {
      const apiKey = 'f4051e3de02bf920159c9401c178f2c5';
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`
      );
      onFetchWeather(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching the weather data:', error);
      setError('City not found or there was an error fetching the data.'); // Set the error message
      onFetchWeather(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter city"
          required
        />
        <button type="submit">Get Weather</button>
      </form>
      {error && <p className="error-message">{error}</p>} {/* Display error message */}
    </div>
  );
};

export default WeatherForm;

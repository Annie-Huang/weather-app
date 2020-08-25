import React, { useState } from 'react';
import './App.css';
import useFetchWeather from './useFetchWeather';
import { IDayWeather } from './model/weather.model';
import DailyForecast from './components/DailyForecast';
import CurrentWeather from './components/CurrentWeather';
import SearchWeather from './components/SearchWeather';
import { WEATHER_UNIT_NAME_MAPPER } from './constant/weather.constant';

const App: React.FC = () => {
  const [city, setCity] = useState('melbourne');
  const [units, setUnits] = useState(WEATHER_UNIT_NAME_MAPPER[0].id); // "M"
  const { loading, days, error } = useFetchWeather(city, units);

  return (
    <div className="container" style={{ maxWidth: '950px' }}>
      <SearchWeather city={city} setCity={setCity} units={units} setUnits={setUnits} />
      {loading && (
        <div className="spinner-wrap">
          <div className="spinner" />
        </div>
      )}

      {!loading && error && (
        <p className="text-center mt-5">
          There is no data available form your search, or our server is down. <br />
          Please try again or contact our support team at 1300 000 000
        </p>
      )}

      {!loading && !error && (
        <>
          <CurrentWeather {...days[0]} city={city} units={units} />
          <div className="forecast-wrap">
            {days.map((day: IDayWeather, index: number) => (
              <DailyForecast key={index} {...day} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default App;

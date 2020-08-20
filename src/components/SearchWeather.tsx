import React, {useState} from 'react';
import './SearchWeather.css';
import {WEATHER_UNIT_SEARCH_ARRAY} from '../constant/weather.constant';


interface ISearchWeatherProp {
  city: string;
  setCity: (searchedCity: string)=> void;
  units: string;
  setUnits: (searchedUnits: string)=> void;
}

const SearchWeather: React.FC<ISearchWeatherProp> = ({city, setCity, units, setUnits}) => {
  const [searchedCity, setSearchedCity] = useState(city);
  const [searchedUnits, setSearchedUnits] = useState(units);

  const handleSubmitData = () => {
    setCity(searchedCity);
    setUnits(searchedUnits);
  }

  return (
    <form className='my-3'>
      <label htmlFor="city" className="form-label">Search Weather for your city</label>
      <input type="text" className="form-control mb-2" id="city" name="city" aria-label="search city" value={searchedCity} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchedCity(e.target.value)}/>
      <button type='button' className="btn btn-primary" onClick={handleSubmitData}>Search</button>

      {WEATHER_UNIT_SEARCH_ARRAY.map(item =>
        <div className="form-check mt-2">
          <input className="form-check-input" type="radio" name="weatherUnit" id="Celsius" onChange={() => setSearchedUnits(item[0])} checked={searchedUnits === item[0]}/>
          <label className="form-check-label" htmlFor={item[1]}>
            {item[1]}
          </label>
        </div>
      )}
    </form>
  );
};

export default SearchWeather;

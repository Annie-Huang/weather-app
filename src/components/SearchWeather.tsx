import React, {useState} from 'react';
import './SearchWeather.css';
import {WEATHER_UNIT_NAME_MAPPER} from '../constant/weather.constant';


interface ISearchWeatherProp {
  city: string;
  setCity: (searchedCity: string)=> void;
  units: string;
  setUnits: (units: string)=> void;
}

const SearchWeather: React.FC<ISearchWeatherProp> = ({city, setCity, units, setUnits}) => {
  const [searchedCity, setSearchedCity] = useState(city);

  return (
    <form className='my-3'>
      <label htmlFor="city" className="form-label">Search Weather for your city</label>
      <input type="text" className="form-control mb-2" id="city" name="city" aria-label="search city" value={searchedCity} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchedCity(e.target.value)}/>
      <button type='button' className="btn btn-primary" onClick={()=>setCity(searchedCity)}>Search</button>

      {WEATHER_UNIT_NAME_MAPPER.map((item, index) =>
        <div className="form-check mt-2" key={index}>
          <input className="form-check-input" type="radio" name="weatherUnit" id={item.name} onChange={() => setUnits(item.id)} checked={units === item.id}/>
          <label className="form-check-label" htmlFor={item.name}>
            {item.name}
          </label>
        </div>
      )}
    </form>
  );
};

export default SearchWeather;

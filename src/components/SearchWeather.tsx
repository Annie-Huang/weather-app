import React, {useState} from 'react';
import './SearchWeather.css';

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
      <input type="text" className="form-control" id="city" name="city" aria-label="search city" value={searchedCity} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchedCity(e.target.value)}/>

      <div className="form-check mt-2">
        <input className="form-check-input" type="radio" name="weatherUnit" id="Celsius" onChange={() => setSearchedUnits('M')} checked={searchedUnits === 'M'}/>
          <label className="form-check-label" htmlFor="Celsius">
            Celsius
          </label>
      </div>
      <div className="form-check mb-2">
        <input className="form-check-input" type="radio" name="weatherUnit" id="Fahrenheit" onChange={() => setSearchedUnits('I')} checked={searchedUnits === 'I'}/>
          <label className="form-check-label" htmlFor="Fahrenheit">
            Fahrenheit
          </label>
      </div>

      <button type='button' className="btn btn-primary" onClick={handleSubmitData}>Search</button>
    </form>
  );
};

export default SearchWeather;

/*
<input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example">
<input class="form-control" type="text" placeholder="Default input" aria-label="deafult input example">
<input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example">
 */


import React, {ChangeEvent, useState} from 'react';
import './SearchWeather.css';

const SearchWeather = ({city, setCity}) => {
  const [searchCity, setSearchCity] = useState(city);

  const handleSubmitData = () => {
    console.log('annieannie, searchCity=', searchCity);
    setCity(searchCity);
  }

  return (
    <form className='my-3'>
      <label htmlFor="city" className="form-label">Search Weather for your city</label>
      <input type="text" className="form-control" id="city" name="city" value={searchCity} onChange={(e) => setSearchCity(e.target.value)}/>
      city: {city}
      <br />

      Search city: {searchCity}
      <br />

      {/*<div className="form-check mt-2">*/}
      {/*  <input className="form-check-input" type="radio" name="weatherUnit" id="Celsius" checked/>*/}
      {/*    <label className="form-check-label" htmlFor="Celsius">*/}
      {/*      Celsius*/}
      {/*    </label>*/}
      {/*</div>*/}
      {/*<div className="form-check mb-2">*/}
      {/*  <input className="form-check-input" type="radio" name="weatherUnit" id="Fahrenheit" />*/}
      {/*    <label className="form-check-label" htmlFor="Fahrenheit">*/}
      {/*      Fahrenheit*/}
      {/*    </label>*/}
      {/*</div>*/}

      {/*<button type="submit" className="btn btn-primary" onClick={handleSubmitData}>Search</button>*/}
      {/*<button className="btn btn-primary" onClick={handleSubmitData}>Search</button>*/}
      <button className="btn btn-primary" onClick={() => setCity(searchCity)}>Search</button>
    </form>
  );
};

export default SearchWeather;

/*
<input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example">
<input class="form-control" type="text" placeholder="Default input" aria-label="deafult input example">
<input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example">
 */


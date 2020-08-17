import React from 'react';

const SearchWeather = ({city: string}) => {
  return (
    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">Search weather for your city</label>
      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
    </div>
  );
};

export default SearchWeather;

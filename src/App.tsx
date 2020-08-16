import React from 'react';
import './App.css';
import useFetchWeather from "./useFetchWeather";

function App() {

  const {loading, days} = useFetchWeather('melbourne', "M");

  console.log('loading=', loading);
  console.log('days=', days);

  return (
    <>
      <div>{JSON.stringify(days)}</div>
      <hr/>

    </>
  );
}

export default App;

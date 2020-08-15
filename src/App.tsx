import React from 'react';
import './App.css';
import useFetchWeather from "./useFetchWeather";

function App() {

  const {jobs, today} = useFetchWeather('melbourne');

  console.log('jobs=', jobs);
  console.log('today=', today);

  return (
    <>
      <div>{JSON.stringify(today)}</div>
      <hr/>

    </>
  );
}

export default App;

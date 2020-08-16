import React from 'react';
import './App.css';
import useFetchWeather from "./useFetchWeather";
import {dayWeather} from './model/weather.model';
import DailyForcast from './components/DailyForcast';

function App() {

  const {loading, days} = useFetchWeather('melbourne', "M");

  console.log('loading=', loading);
  console.log('days=', days);

  return (
    <>
      <div>{JSON.stringify(days)}</div>
      <hr/>

      {days.map((day: dayWeather, index: number) => <DailyForcast key={index} {...day}/>)}


    </>
  );
}

export default App;

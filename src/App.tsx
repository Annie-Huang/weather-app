import React from 'react';
import './App.css';
import useFetchWeather from "./useFetchWeather";
import {dayWeather} from './model/weather.model';
import DailyForcast from './components/DailyForcast';


const forcastDivStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, 10rem)",
  gap: "10px",
  justifyContent: "center",
}

function App() {

  const {loading, days} = useFetchWeather('melbourne', "M");

  console.log('loading=', loading);
  console.log('days=', days);

  return (
    <>
      {/*<div>{JSON.stringify(days)}</div>*/}
      {/*<hr/>*/}

      <div style={forcastDivStyle}>
        {days.map((day: dayWeather, index: number) => <DailyForcast key={index} {...day}/>)}
      </div>

    </>
  );
}

export default App;

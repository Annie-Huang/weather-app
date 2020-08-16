import {useEffect, useReducer} from "react";
import axios from 'axios';
import {convertAPIResponseToDayWeatherList} from './untils/weather.utils';

const CURRENT_WEATHER_ULR = 'http://api.weatherbit.io/v2.0/current';
const DAILY_FORCAST_WEATHER_ULR = 'http://api.weatherbit.io/v2.0/forecast/daily';
const API_KEY = '4719aae402f54021afa974832544daf9';
const COUNTRY = "AU";
const FORECAST_DAYS = 7;

const ACTIONS = {
  MAKE_REQUEST: 'make-request',
  GET_DATA: 'get-data',
  ERROR: 'error',
  UPDATE_HAS_NEXT_PAGE: 'update-has-next-page'
}

function reducer(state:any, action:any) {
  // e.g. if you have dispatch({type: 'hello', payload: {x:3}})
  // then action.payload.x is 3.

  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return {loading: true, days: []}
    case ACTIONS.GET_DATA:
      return {...state, loading: false, days: action.payload.days}
    default:
      return state;
  }
}


export default function useFetchWeather(city: string, units: string) {
  const [state, dispatch] = useReducer(reducer, {loading: true, days: []});

  useEffect(() => {
    dispatch({type: ACTIONS.MAKE_REQUEST})

    // https://www.weatherbit.io/api/weather-forecast-16-day
    axios.get(DAILY_FORCAST_WEATHER_ULR, {
      params: {
        "key": API_KEY,
        "days": FORECAST_DAYS,
        "country": COUNTRY,
        city,
        units,
      }

    }).then(res => {
      console.log('7 days res=', res);
      console.log('7 days res.data.data[0]=',  res.data.data);
      // console.log('7 days res.data.data[0]=',  JSON.stringify(res.data.data));
      dispatch({type: ACTIONS.GET_DATA, payload: {days: convertAPIResponseToDayWeatherList(res.data.data)}})

      // TODO: Need to handle no data....

    }).catch(e => {
      dispatch({type: ACTIONS.ERROR, payload: {error: e}})
    });


  }, [city, units])

  return state;
}

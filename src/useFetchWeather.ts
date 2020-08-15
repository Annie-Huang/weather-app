import {useEffect, useReducer} from "react";
import axios from 'axios';

const CURRENT_WEATHER_ULR = 'http://api.weatherbit.io/v2.0/current';
const API_KEY = '4719aae402f54021afa974832544daf9';

const ACTIONS = {
  MAKE_REQUEST: 'make-request',
  GET_TODAY_DATA: 'get-today-data',
  ERROR: 'error',
  UPDATE_HAS_NEXT_PAGE: 'update-has-next-page'
}

function reducer(state:any, action:any) {
  // e.g. if you have dispatch({type: 'hello', payload: {x:3}})
  // then action.payload.x is 3.

  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return {loadingToday: true, loadingForecast: true, today: null, jobs: []}
    case ACTIONS.GET_TODAY_DATA:
      return {...state, loadingToday: false, today: action.payload.today}
    default:
      return state;
  }
}


export default function useFetchWeather(city: string) {
  const [state, dispatch] = useReducer(reducer, {loadingToday: true, loadingForecast: true, today: null, jobs: []});

  useEffect(() => {
    dispatch({type: ACTIONS.MAKE_REQUEST})

    // https://www.weatherbit.io/api/weather-current
    axios.get(CURRENT_WEATHER_ULR, {
      params: {city, "country": "AU", "units": "M", "key": API_KEY}

    }).then(res => {
      console.log('res=', res);
      console.log('res.data.data[0]=',  res.data.data[0]);
      dispatch({type: ACTIONS.GET_TODAY_DATA, payload: {today: res.data.data[0]}})

      // TODO: Need to handle no data....

    }).catch(e => {
      dispatch({type: ACTIONS.ERROR, payload: {error: e}})
    });


  }, [city])

  return state;
}

import { useEffect, useReducer } from 'react';
import axios from 'axios';
import { convertAPIResponseToDayWeatherList } from './untils/weather.utils';
import { IDayWeather } from './model/weather.model';

const DAILY_FORCAST_WEATHER_ULR = 'http://api.weatherbit.io/v2.0/forecast/daily';
const API_KEY = '4719aae402f54021afa974832544daf9';
const COUNTRY = 'AU';
const FORECAST_DAYS = 7;

enum ACTIONS {
  MAKE_REQUEST = 'make-request',
  GET_DATA = 'get-data',
  ERROR = 'error',
}

interface state {
  loading: boolean;
  days: IDayWeather[];
  error?: any;
}

interface action {
  type: string;
  payload?: any;
}

function reducer(state: state, action: action): state {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, days: [] };
    case ACTIONS.GET_DATA:
      return {
        ...state,
        loading: false,
        days: action.payload.days,
        error: null,
      };
    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        days: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
}

export default function useFetchWeather(city: string, units: string) {
  const [state, dispatch] = useReducer(reducer, {
    loading: true,
    days: [],
    error: null,
  });

  useEffect(() => {
    dispatch({ type: ACTIONS.MAKE_REQUEST });

    // https://www.weatherbit.io/api/weather-forecast-16-day
    axios
      .get(DAILY_FORCAST_WEATHER_ULR, {
        params: {
          key: API_KEY,
          days: FORECAST_DAYS,
          country: COUNTRY,
          city,
          units,
        },
      })
      .then(res => {
        dispatch({
          type: ACTIONS.GET_DATA,
          payload: { days: convertAPIResponseToDayWeatherList(res.data.data) },
        });
      })
      .catch(e => {
        dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
      });
  }, [city, units]);

  return state;
}

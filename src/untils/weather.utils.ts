import {dayWeather, dayWeatherAPIResponse} from '../model/weather.model';

export const convertAPIResponseToDayWeatherList = (apiResponses: dayWeatherAPIResponse[]): dayWeather[] => (
  apiResponses.map(resp => ({
    precipitation: `${resp.pop}%`,
    humidity: `${resp.rh}%`,
    wind: `${(resp.wind_spd * 3.6).toFixed()} kph ${resp.wind_cdir}`, // convert m/s to km/h
    temperature: resp.temp,
    weather_description: resp.weather.description,
    min_temperature: resp.min_temp,
    max_temperature: resp.max_temp,
    weather_icon: `/imgs/icons/${resp.weather.icon}.png`,
    clouds: `${resp.clouds}%`,
  }))
)

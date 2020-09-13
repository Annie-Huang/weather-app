import { IDayWeather, IDayWeatherAPIResponse } from '../model/weather.model';
import { MONTH, WEEKDAY } from '../constant/weather.constant';

export const getWeekDay = (date: Date): string => WEEKDAY[date.getDay()];
// export const getCalendarMonth = (date: Date): string => MONTH[date.getMonth()];

export const displayDate = (date: Date): string => {
  // The first param is the locale or language you want to use,
  // or use undefined, which will take info base on user's browser and what default they set
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
  return date.toLocaleString(undefined, { weekday: 'long', day: 'numeric', month: 'long' });
};

const convertDateStrToWeekDay = (dateStr: string): string => getWeekDay(new Date(dateStr));

export const convertAPIResponseToDayWeatherList = (apiResponses: IDayWeatherAPIResponse[]): IDayWeather[] => {
  const daysWeather = apiResponses.map(resp => ({
    precipitation: `${resp.pop}%`,
    humidity: `${resp.rh}%`,
    wind: `${(resp.wind_spd * 3.6).toFixed()} kph ${resp.wind_cdir}`, // convert m/s to km/h
    temperature: resp.temp,
    weather_description: resp.weather.description,
    day_of_week: convertDateStrToWeekDay(resp.datetime),
    min_temperature: resp.min_temp,
    max_temperature: resp.max_temp,
    weather_icon: `/imgs/icons/${resp.weather.icon}.png`,
    clouds: `${resp.clouds}%`,
  }));

  daysWeather[0].day_of_week = 'Today';
  return daysWeather;
};

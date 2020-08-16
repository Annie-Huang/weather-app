export interface weather {
  icon: string;           // e.g. "c03d",
  description: string;    // e.g. "Broken clouds"
}

export interface dayWeatherAPIResponse {
  precip: number;
  rh: number;
  wind_spd: number;
  wind_cdir: string;
  temp: number;
  min_temp: number;
  max_temp: number;
  weather: weather;
}

export interface dayWeather {
  // use for current day.
  precipiation: string;         // precip                 e.g. "precip": 0.9375,                          <<< precip: Accumulated liquid equivalent precipitation (default mm)
  humidity: string              // rh                     e.g. "rh": 79,                                  <<< rh: Average relative humidity (%)
  wind: string;                 // wind_spd + wind_cdir   e.g. "wind_spd": 4.05416, | "wind_cdir": "SW",  <<< wind_spd: Wind speed (Default m/s).
  temperature: string;          // temp                   e.g. "temp": 11.3,                              <<< temp: Temperature (default Celcius).
  weather_description: string;  // weather.description    e.g. "description": "Broken clouds"            <<< description: Text weather description

  // use for forecast days.
  min_temperature: string       // min_temp               e.g. "min_temp": 8.8,                           <<< min_temp: Minimum Temperature (default Celcius)
  max_temperature: string       // max_temp               e.g. "max_temp": 14.4,                          <<< max_temp: Maximum Temperature (default Celcius)

  // common use for current and forecast days:
  weather_icon: string;         // weather.icon           e.g. "icon": "c03d",                            <<< icon:Weather icon code
  clouds: string                // clouds                 e.g. "clouds": 64,                              <<< clouds: Cloud coverage (%).
}



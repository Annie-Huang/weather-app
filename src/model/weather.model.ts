export interface weather {
  icon: string;           // e.g. "c03d",
  code: string;           // e.g. "803"
  description: string;    // e.g. "Broken clouds"
}

export interface todayWeather {
  precipiation: string; // precip                 e.g. precip: 0
  humidity: string      // rh                     e.g. rh: 90
  wind: string;         // wind_spd + wind_cdir   e.g. wind_spd: 2.1 | wind_cdir: "SSE"   <<< wind_spd: Wind speed (Default m/s).
  temp: string;         // temp                   e.g. temp: 12.2                         <<< temp: Temperature (default Celcius).
  weather: weather;
  clouds: string        // clouds                 e.g. clouds: 2                          <<< clouds: Cloud coverage (%).
}



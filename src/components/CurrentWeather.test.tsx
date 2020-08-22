import React from 'react';
import CurrentWeather, {ICurrentWeatherProp} from './CurrentWeather';
import { shallow } from 'enzyme';

test('CurrentWeather', () => {
  const props: ICurrentWeatherProp = {
    precipitation: "precipitationStr",
    humidity: "humidityStr",
    wind: "windStr",
    temperature: 20,
    weather_description: "weather_descriptionStr",
    weather_icon: "weather_iconStr",
    clouds: "cloudsStr",
    city: "cityStr",
    units: "unitsStr",
  }

  const wrapper  = shallow(<CurrentWeather {...props} />)

  // Cannot do snapshot testing because it includes the date.
  expect(wrapper.find('h1').html()).toBe('<h1 class="text-capitalize">cityStr</h1>');
  expect(wrapper.find('.summary div').contains('weather_descriptionStr')).toBe(true);
  expect(wrapper.find('img').html()).toBe('<img src="weather_iconStr" alt="weather_descriptionStr"/>');
  expect(wrapper.find('.left-column div').html()).toBe(`<div class="hero">20 <span class="text-secondary">°</span></div>`);

  expect(wrapper.find('.right-column div')).toHaveLength(4);
  expect(wrapper.find('.right-column div').at(0).html()).toBe('<div><span class="text-secondary">Precipitation:</span> precipitationStr</div>');
  expect(wrapper.find('.right-column div').at(1).html()).toBe('<div><span class="text-secondary">Humidity:</span> humidityStr</div>');
  expect(wrapper.find('.right-column div').at(2).html()).toBe('<div><span class="text-secondary">Wind:</span> windStr</div>');
  expect(wrapper.find('.right-column div').at(3).html()).toBe('<div><span class="text-secondary">Clouds:</span> cloudsStr</div>');
});

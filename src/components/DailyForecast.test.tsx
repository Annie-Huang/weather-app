import DailyForecast, { IDailyForecastProp } from './DailyForecast';
import React from 'react';
import { shallow } from 'enzyme';

test('DailyForecast', () => {
  const props: IDailyForecastProp = {
    weather_description: 'weather_descriptionStr',
    day_of_week: 'day_of_weekStr',
    min_temperature: 10,
    max_temperature: 20,
    weather_icon: 'weather_iconStr',
    clouds: 'cloudsStr',
  };

  const wrapper = shallow(<DailyForecast {...props} />);
  expect(wrapper).toMatchSnapshot();
});

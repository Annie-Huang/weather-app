import React from 'react';
import { mount, shallow } from 'enzyme';
import SearchWeather, { ISearchWeatherProp } from './SearchWeather';

test('SearchWeather - snapshot', () => {
  const props: ISearchWeatherProp = {
    city: 'cityStr',
    setCity: jest.fn(),
    units: 'unitsStr',
    setUnits: jest.fn(),
  };

  const wrapper = shallow(<SearchWeather {...props} />);
  expect(wrapper).toMatchSnapshot();
});

test('SearchWeather - change radio button will make setUnits call', () => {
  const props: ISearchWeatherProp = {
    city: 'cityStr',
    setCity: jest.fn(),
    units: 'unitsStr',
    setUnits: jest.fn(),
  };

  const wrapper = shallow(<SearchWeather {...props} />);
  wrapper
    .find('input[type="radio"]')
    .at(1)
    .simulate('change', { target: { checked: true } });
  expect(props.setUnits).toHaveBeenCalledWith('I');
  wrapper
    .find('input[type="radio"]')
    .at(0)
    .simulate('change', { target: { checked: true } });
  expect(props.setUnits).toHaveBeenCalledWith('M');
});

test('SearchWeather - change input and click search button will make setCity call', () => {
  const props: ISearchWeatherProp = {
    city: 'cityStr',
    setCity: jest.fn(),
    units: 'unitsStr',
    setUnits: jest.fn(),
  };

  const cityToSearch = 'mitcham';

  // Have to use full mount otherwise it will throw:
  // ShallowWrapper::instance() can only be called on the root exception
  const wrapper = mount(<SearchWeather {...props} />);

  // wrapper.find('input[type="text"]').instance<HTMLInputElement>().value = cityToSearch;   // Very annoying this short form doesn't work
  wrapper.find('input[type="text"]').simulate('change', { target: { value: cityToSearch } });
  wrapper.find('button').simulate('click');
  expect(props.setCity).toHaveBeenCalledWith(cityToSearch);
});

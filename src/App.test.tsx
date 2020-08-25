import React from 'react';
import App from './App';
import { mount } from 'enzyme';
import SearchWeather from './components/SearchWeather';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import { resp } from './sampleResponse.ts';

jest.mock('axios');

it('fetches successfully data from an API', async () => {
  await act(async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(resp));
    // axios.get.mockImplementationOnce(() => Promise.reject(new Error('Network Error')),);

    const wrapper = mount(<App />);

    wrapper.update();
    // wrapper.forceUpdate();
    // wrapper.instance().forceUpdate();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(SearchWeather)).toHaveLength(1);
  });
});

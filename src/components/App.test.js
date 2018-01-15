import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('render properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('it contains a connected wallet component', () => {
    expect(app.find('Connect(Wallet)').exists()).toBe(true);
  });
});

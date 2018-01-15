import React from 'react';
import { shallow } from 'enzyme';
import {Wallet} from './Wallet';

describe('Wallet', ()=>{
  const balance = 20;
  const props = {balance: 20};
  const wallet = shallow(<Wallet {...props}/>);

  it('renders properly', () => {
    expect(wallet).toMatchSnapshot();
  });

  it('displays the balance from props',() => {
    expect(wallet.find('.balance').text()).toEqual('Wallet Balance: 20');
  });

  it('creates and input to deposite or withdraw from the balance', () => {
    expect(wallet.find('.input_wallet').exists()).toBe(true);
  });



describe('when user types into wallet input ', () => {
  const userBalance = '25';

  beforeEach(() => {
    wallet.find('.input_wallet').simulate('change', {target: {value: userBalance}});
  });

  it('updates local wallet balance into `state` and coverts it into integer', () => {
    expect(wallet.state().balance).toEqual(parseInt(userBalance,10));
  });
  });
})

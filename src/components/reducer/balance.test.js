import balanceReducer from './balance';
import * as constants from '../actions/constants';

describe('balanceReducer', () => {
  it('sets a balance ', () => {
    const balance = 10;

    expect(balanceReducer(undefined, {type: constants.SET_BALANCE, balance})).toEqual(balance);
  })

  it('deposite to the balance', () => {
    const deposite = 10;
    const initialState = 5;

    expect(balanceReducer(initialState, {type: constants.DEPOSITE, deposite})).toEqual(initialState + deposite );
  })
});

it('withdraw from balance', () => {
  const withdraw = 5;
  const initialState = 10;

  expect(balanceReducer(initialState, {type: constants.WITHDRAW, withdraw})).toEqual(initialState - withdraw );
});

import * as constants from './constants';
import * as actions from './balance';

it('creates an action to set balance', () => {
  const balance = 0;

  const expectedBalance = {type: constants.SET_BALANCE , balance };

  expect(actions.setBalance(balance)).toEqual(expectedBalance);

});

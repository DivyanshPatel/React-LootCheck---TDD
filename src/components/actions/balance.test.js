import * as constants from './constants';
import * as actions from './balance';

it('creates an action to set balance', () => {
  const balance = 0;

  const expectedBalance = {type: constants.SET_BALANCE , balance };

  expect(actions.setBalance(balance)).toEqual(expectedBalance);

});

it("creates an action to deposite to existing balance", () => {
  const deposite = 10;

  const expectedDeposite = {type: constants.DEPOSITE, deposite};

  expect(actions.deposite(deposite)).toEqual(expectedDeposite);
});

it('creates and action to withdraw from the existing balance', () => {
  const withdraw = 5;

  const expectedWithdraw = {type: constants.WITHDRAW , withdraw};

  expect(actions.withdraw(withdraw)).toEqual(expectedWithdraw);
})

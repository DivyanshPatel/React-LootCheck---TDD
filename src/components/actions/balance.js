import * as constant from './constants';

export const setBalance = balance => {
  return {
    type: constant.SET_BALANCE,
    balance
  }
}

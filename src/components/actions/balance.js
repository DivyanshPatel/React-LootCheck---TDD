import * as constant from './constants';

export const setBalance = balance => {
  return {
    type: constant.SET_BALANCE,
    balance
  }
}

export const deposite = deposite => {
  return {
    type: constant.DEPOSITE,
    deposite
  }
}

export const withdraw = withdraw =>{
  return {
    type: constant.WITHDRAW,
    withdraw
  }
}

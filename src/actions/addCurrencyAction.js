import {ADD_CURRENCY} from '../constants/actionTypes';
import {REMOVE_CURRENCY} from '../constants/actionTypes';

export function addCurrency(currency) {
  return function (dispatch) {
    return new Promise(function(resolve, reject) {
      dispatch({
        type: ADD_CURRENCY,
        payload: currency
      });
      resolve();
    })
  };
}

export function removeCurrency(currency) {
  return function (dispatch) {
    return new Promise(function(resolve, reject) {
      dispatch({
        type: REMOVE_CURRENCY,
        payload: currency
      });
      resolve();
    })
  };
}

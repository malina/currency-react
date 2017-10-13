import {ADD_CURRENCY, GET_RATES_SUCCESS} from '../constants/actionTypes';
import axios from 'axios';

const URL = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22KZTUSD%2C%20USDKZT%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

export function onAddCurrency(currency) {
  return function (dispatch) {
    return new Promise(function(resolve, reject) {
      dispatch({
        type: ADD_CURRENCY,
        payload: currency
      });
      resolve();
    })

    // axios.get(URL).then(response => {
    //   dispatch({
    //     type: GET_RATES_SUCCESS,
    //     payload: response.data.query.results.rate
    //   });
    // });
  };
}

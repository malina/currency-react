import {GET_RATES_SUCCESS} from '../constants/actionTypes';
import axios from 'axios';

const URL = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22*|QUERY|*%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

const makeQuery = (currencies) => {
  let query = [];
  currencies.map(v => {
    currencies.map(w => { if (w!=v) query.push(w+v) })
  });
  return query.join('%2C%20');
}

export function getRates() {
  return function (dispatch, getState) {
    let currencies = getState().currencies;
    let query = makeQuery(currencies);
    let url = URL.replace('*|QUERY|*', query);

    axios.get(url).then(response => {
      dispatch({
        type: GET_RATES_SUCCESS,
        payload: response.data.query.results.rate
      });
    });
  };
}

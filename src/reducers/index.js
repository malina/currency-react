import { combineReducers } from 'redux';
import currencies from './currencies';
import rates from './rates';

const rootReducer = combineReducers({
  currencies,
  rates
});

export default rootReducer;

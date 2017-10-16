import {ADD_CURRENCY} from '../constants/actionTypes';
import {REMOVE_CURRENCY} from '../constants/actionTypes';

const initialState = ['RUB', 'USD'];

export default function currencies(state = initialState, action) {
  let newState;

  switch (action.type) {
    case ADD_CURRENCY:
      return state.includes(action.payload) ? state : [...state, action.payload]
    case REMOVE_CURRENCY:
      return state.filter(v => v !== action.payload)

    default:
      return state;
  }
}

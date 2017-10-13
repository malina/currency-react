import {ADD_CURRENCY} from '../constants/actionTypes';
const initialState = [];

export default function currencies(state = initialState, action) {
  let newState;

  switch (action.type) {
    case ADD_CURRENCY:
      return [...state, action.payload]

    default:
      return state;
  }
}

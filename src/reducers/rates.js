import {GET_RATES_SUCCESS} from '../constants/actionTypes';
const initialState = [];

export default function currencies(state = initialState, action) {
  let newState;

  switch (action.type) {
    case GET_RATES_SUCCESS:
      return action.payload

    default:
      return state;
  }
}

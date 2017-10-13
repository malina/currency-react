import {GET_RATES_SUCCESS} from '../constants/actionTypes';
const initialState = [];

export default function currencies(state = initialState, action) {
  let newState;

  switch (action.type) {
    case GET_RATES_SUCCESS:
      console.log(action.payload);
      return action.payload

    default:
      return state;
  }
}

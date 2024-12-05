import { INCREMENT, DECREMENT } from './actions';

// Initial state
const initialState = {
  value: 0,
  num: 0
};

// Reducer function
const counterReducer = (state = initialState, action) => {
    console.log(state, action)
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + action.payload };
    case DECREMENT:
      return { ...state, value: state.value - action.payload };
    default:
      return state;
  }
};

export default counterReducer;

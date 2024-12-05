
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';


export const increment = (num) => ({
  type: INCREMENT,
  payload: num
});

export const decrement = (num) => ({
  type: DECREMENT,
  payload: num
});

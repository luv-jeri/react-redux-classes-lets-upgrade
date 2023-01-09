import action from '../constants/count.constants';

const { INCREMENT, DECREMENT, RESET, SET_TOTAL } = action;

const incAction = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};
const decAction = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};
const resetAction = () => {
  return {
    type: RESET,
  };
};

const setTotal = (value) => {
  return {
    type: SET_TOTAL,
    payload: value,
  };
};

export { incAction, decAction, resetAction, setTotal };

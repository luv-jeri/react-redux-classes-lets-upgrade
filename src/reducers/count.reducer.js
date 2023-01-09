import action from '../constants/count.constants';

const { INCREMENT, DECREMENT, RESET, SET_TOTAL } = action;

const initalState = {
  count: 10,
  total: 10,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload };
    case DECREMENT:
      return { ...state, count: state.count - action.payload };
    case RESET:
      return { ...state, count: 0 };
    case SET_TOTAL:
      return { ...state, total: action.payload };
    default:
      return state;
  }
};

export default reducer;

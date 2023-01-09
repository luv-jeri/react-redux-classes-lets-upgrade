import actions from '../constants/user.constants';

const { SET_NAME, SET_AGE } = actions;

const intialState = {
  name: '',
  age: '',

  isLogged: false,
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.payload };
    case SET_AGE:
      return { ...state, age: action.payload };
    default:
      return state;
  }
};

export default reducer;

import actions from '../constants/user.constants';

const { SET_NAME, SET_AGE } = actions;

const setNameAction = (name) => {
  return {
    type: SET_NAME,
    payload: name,
  };
};

const setAgeAction = (age) => {
  return {
    type: SET_AGE,
    payload: age,
  };
};

export { setNameAction, setAgeAction };

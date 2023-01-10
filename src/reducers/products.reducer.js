import actions from '../constants/product.constants';

const { SET_PRODUCTS, SET_LOADING, SET_ERROR, RESET_PRODUCTS, RESET_ALL } = actions;

const initialState = {
  data: [],
  loading: true,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        data: action.payload,
        error: null,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case RESET_PRODUCTS:
      return {
        ...state,
        data: [],
      };
    case RESET_ALL:
      return {
        data: [],
        error: null,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;

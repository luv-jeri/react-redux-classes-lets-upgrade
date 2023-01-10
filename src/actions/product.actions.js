import actions from '../constants/product.constants';

const { SET_PRODUCTS, SET_LOADING, SET_ERROR, RESET_PRODUCTS, RESET_ALL } = actions;

const setProduct = async () => {
  return async (dispatch, getState) => {
    dispatch(setLoading(true));
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      dispatch({
        type: SET_PRODUCTS,
        payload: data,
      });
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };
};

const setLoading = (value) => {
  return {
    type: SET_LOADING,
    payload: value,
  };
};

const setError = (error) => {
  return {
    type: SET_ERROR,
    payload: error,
  };
};

const resetProducts = () => {
  return {
    type: RESET_PRODUCTS,
  };
};

const resetAll = () => {
  return {
    type: RESET_ALL,
  };
};

export { setProduct, setLoading, setError, resetProducts, resetAll };

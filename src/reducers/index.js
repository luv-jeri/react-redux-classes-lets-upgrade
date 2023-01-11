import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import countSliceReducer from './Count.slice';
import productSlice from './Product.slice';

const loggerMiddleware = (store) => (next) => (action) => {
  console.log('dispatching', action);
  next(action);
};

const listnerMiddlware = createListenerMiddleware();

listnerMiddlware.startListening({
  actionCreator: 'count/increment',
  effect: (action, store) => {
    console.log('Incremented', action.payload);
  },
});

const store = configureStore({
  reducer: {
    count: countSliceReducer,
    product: productSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(listnerMiddlware.middleware, loggerMiddleware);
  },
});

export default store;

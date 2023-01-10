import { createStore, combineReducers, applyMiddleware } from 'redux';

import countReducer from './count.reducer';
import userReducer from './user.reducer';
import productReducer from './products.reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  count: countReducer,
  user: userReducer,
  products: productReducer,
});

const loggerMiddleware = (store) => (next) => (action) => {
  console.log('Middleware logger', action);
  next(action);
};

// // write thunk middleware
// const thunk = (store) => (next) => async (action) => {
//   if (typeof action === 'function') {
//     await action(store.dispatch, store.getState);
//     return;
//   }
//   next(action);
// };

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, thunk));

store.subscribe(() => {
  console.table(store.getState());
});

export default store;

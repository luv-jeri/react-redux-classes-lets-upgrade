import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

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

// write thunk middleware
// const thunk = (store) => (next) => async (action) => {
//   if (typeof action === 'function') {
//     await action(store.dispatch, store.getState);
//     return;
//   }
//   next(action);
// };
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(loggerMiddleware, thunk)
  // other store enhancers if any
);

const store = createStore(rootReducer, enhancer);

store.subscribe(() => {
  console.log('store changed', store.getState());
});

export default store;

import { createStore, combineReducers, applyMiddleware } from 'redux';

import countReducer from './count.reducer';
import userReducer from './user.reducer';

const rootReducer = combineReducers({
  count: countReducer,
  user: userReducer,
});

const loggerMiddleware = (store) => (next) => (action) => {
  console.log('Middleware', action);
  next(action);
};




const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

export default store;

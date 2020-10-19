/*
@ The main Store file with all the reducers configured under root reducer
*/

import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import postReducer from '../reducers/postReducer';

const composeEnhancers = (
  /* eslint-disable no-underscore-dangle */
  process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose
);

const rootReducer = combineReducers({
  posts: postReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;

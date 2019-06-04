import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { promiseMiddleware } from './middleware'
import common from './reducers/common'
import user from './reducers/user'
import profile from './reducers/profile'


  
const reducer = combineReducers({
  common,
  user,
  profile,
});
  
const middleware = applyMiddleware(promiseMiddleware);
  
const storeEnhancers = compose(
    middleware,
    (window && window.__REDUX_DEVTOOLS_EXTENSION__)? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
);
  
const store = createStore(reducer, {}, storeEnhancers);

export default store;
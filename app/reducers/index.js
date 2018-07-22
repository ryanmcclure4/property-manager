// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import business from './business';

const rootReducer = combineReducers({
  business,
  router,
});

export default rootReducer;

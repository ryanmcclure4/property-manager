// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import data from './data';
import ui from './ui';

const rootReducer = combineReducers({
  ui,
  data,
  router,
});

export default rootReducer;

// @flow
import {
  BUSINESS_INITIAL_LOAD,
  BUSINESS_INITIAL_LOAD_SUCCESS,
  BUSINESS_INITIAL_LOAD_FAILURE,
} from '../actions/business';

type actionType = {
  +type: string
};

function initialLoad(state: { properties: [] } = { properties: [] }, action: actionType) {
  switch (action.type) {
    case BUSINESS_INITIAL_LOAD:
      return {
        ...state,
        loading: true,
        loadingError: null,
      };
    case BUSINESS_INITIAL_LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        loadingError: action.error,
      };
    case BUSINESS_INITIAL_LOAD_SUCCESS:
      return {
        ...state,
        ...action.business,
        loading: false,
        loadingError: null,
      };
    default:
      return state;
  }
}

export default function business(state: { properties: [] } | undefined = { properties: [] }, action: actionType) {
  switch (action.type) {
    case BUSINESS_INITIAL_LOAD:
    case BUSINESS_INITIAL_LOAD_FAILURE:
    case BUSINESS_INITIAL_LOAD_SUCCESS:
      return {
        ...state,
        ...initialLoad(state.business, action),
      };
    default:
      return state;
  }
}

// @flow
import {
  BusinessActions,
  PropertyActions,
} from 'actions';
import { normalize } from '../../../api';
import property from './property';

const {
  BUSINESS_INITIAL_LOAD,
  BUSINESS_INITIAL_LOAD_SUCCESS,
  BUSINESS_INITIAL_LOAD_FAILURE,
  SET_ACTIVE_PROPERTY,
} = BusinessActions;

const {
  UPDATE_PROPERTY,
  UPDATE_PROPERTY_SUCCESS,
  UPDATE_PROPERTY_FAILURE,
} = PropertyActions;

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
      const data = normalize(action.business);
      return {
        ...state,
        ...data,
        activeProperty: data.properties[0],
        loading: false,
        loadingError: null,
      };
    default:
      return state;
  }
}

export default function business(state: {
  properties: [],
  entities: {
    property: Object,
  },
  activeProperty: boolean,
} | undefined = { properties: [], activeProperty: null }, action: actionType) {
  switch (action.type) {
    case BUSINESS_INITIAL_LOAD:
    case BUSINESS_INITIAL_LOAD_FAILURE:
    case BUSINESS_INITIAL_LOAD_SUCCESS:
      return {
        ...state,
        ...initialLoad(state.business, action),
      };
    case SET_ACTIVE_PROPERTY:
      return {
        ...state,
        activeProperty: action.id,
      };
    case UPDATE_PROPERTY:
    case UPDATE_PROPERTY_SUCCESS:
    case UPDATE_PROPERTY_FAILURE:
      return {
        ...state,
        entities: {
          ...state.entities,
          property: {
            ...state.entities.property,
            ...property(state.entities.property, action),
          },
        },
      };
    default:
      return state;
  }
}

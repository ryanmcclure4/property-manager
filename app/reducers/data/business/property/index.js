// @flow
import {
  PropertyActions,
} from 'actions';

const {
  UPDATE_PROPERTY,
  UPDATE_PROPERTY_SUCCESS,
  UPDATE_PROPERTY_FAILURE,
} = PropertyActions;

type actionType = {
  +type: string
};

export default function property(state: {
  [string]: Object,
} | undefined = { }, action: actionType) {
  switch (action.type) {
    case UPDATE_PROPERTY_SUCCESS:
    console.log('SUCCEESSSSS', action);
      return {
        ...state,
        [action.property._id]: {
          ...state[action.property._id],
          ...action.property,
        },
      }
    case UPDATE_PROPERTY:
    case UPDATE_PROPERTY_FAILURE:
    default:
      return state;
  }
}

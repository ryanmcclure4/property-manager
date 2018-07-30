// @flow
import {
  ViewActions,
} from 'actions';

const {
  SET_VIEW,
} = ViewActions;

type actionType = {
  +type: string
};

export default function view(state: {
  name: string,
} | undefined = { name: 'property' }, action: actionType) {
  switch (action.type) {
    case SET_VIEW:
      return {
        ...state,
        name: action.view,
      }
    default:
      return state;
  }
}

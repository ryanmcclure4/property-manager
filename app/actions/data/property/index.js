// @flow
import { db, Property } from '../../../api';

type actionType = {
  +type: string
};

export const UPDATE_PROPERTY = 'UPDATE_PROPERTY';
export const UPDATE_PROPERTY_SUCCESS = 'UPDATE_PROPERTY_SUCCESS';
export const UPDATE_PROPERTY_FAILURE = 'UPDATE_PROPERTY_FAILURE';

export function updatePropertySuccess(property) {
  console.log('SUCCESS', property);
  return {
    type: UPDATE_PROPERTY_SUCCESS,
    property,
  };
}

export function updatePropertyFailure(error: string) {
  return {
    type: UPDATE_PROPERTY_FAILURE,
    error,
  };
}

export function updateProperty(data) {
  return (
    dispatch: (action: actionType) => void,
  ) => {
    return Property.update(data)
      .then(res => {
       return (
        dispatch(updatePropertySuccess({
          ...data,
          _rev: res.rev,
        }))
      )})
      .catch(err => {
        console.log('ERR', err);
        updatePropertyFailure(err.toString());
      });
  }
}

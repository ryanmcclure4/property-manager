// @flow
import { db, Property } from '../../../api';

type actionType = {
  +type: string
};

export const BUSINESS_INITIAL_LOAD = 'BUSINESS_INITIAL_LOAD';
export const BUSINESS_INITIAL_LOAD_SUCCESS = 'BUSINESS_INITIAL_LOAD_SUCCESS';
export const BUSINESS_INITIAL_LOAD_FAILURE = 'BUSINESS_INITIAL_LOAD_FAILURE';
export const SET_ACTIVE_PROPERTY = 'SET_ACTIVE_PROPERTY';

export function setActiveProperty(propertyId: string) {
  return {
    type: SET_ACTIVE_PROPERTY,
    id: propertyId,
  };
}

export function businessInitialLoad() {
  return {
    type: BUSINESS_INITIAL_LOAD,
  };
}

export function businessInitialLoadSuccess(business: { properties: [] }) {
  console.log('SUCCESS', business);
  return {
    type: BUSINESS_INITIAL_LOAD_SUCCESS,
    business,
  };
}

export function businessInitialLoadFailure(error: string) {
  return {
    type: BUSINESS_INITIAL_LOAD_FAILURE,
    error,
  };
}

export function loadBusiness() {
  return (
    dispatch: (action: actionType) => void,
  ) => {
    dispatch(businessInitialLoad());
    // Property.create({
    //   name: 'Windham',
    //   address: {
    //     street1: '1346 James McCoy Way',
    //     city: 'San Diego',
    //     state: 'CA',
    //     zipCode: 92027,
    //   },
    // }).then(prop => {
    //   console.log('CREATED', prop);
    // }).catch(err => {
    //   console.log('CREATE ERR', err);
    // })
    return db.allDocs({
      include_docs: true,
      startkey: 'property:',
      endkey: 'property:\ufff0',
    }).then(data => (
      dispatch(businessInitialLoadSuccess({
        properties: data.rows.map(row => row.doc),
      }))
    )).catch(err => {
      console.log('FAILURE', err);
      businessInitialLoadFailure(err.toString());
    })
  }
}

// @flow

import model from '../model';

export type $Property = {
  _id: string,
  name: string,
  businessId: string,
  address: string,
  tenants: {
    _id: string,
    contactId: string,
    lease: {
      url: string,
    },
    status: 'active' | 'inactive',
  }[],
};

/**
 * Property
 */
const Property = {
  ...model('property'),
};

export default Property;

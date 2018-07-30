// @flow

import { normalize, schema } from 'normalizr';

const property = new schema.Entity('property', undefined, {
  idAttribute: value => value._id,
});
const business = {
  properties: [property],
};

function normalizeBusiness(data: Object): Object {
  const normalized = normalize(data, business);
  return {
    ...normalized,
    ...normalized.result,
  };
}

export default normalizeBusiness;

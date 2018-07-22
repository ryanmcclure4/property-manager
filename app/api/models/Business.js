// @flow

import db from '../db';
import model from '../model';

export type $Business = {
  _id: string,
  name: string,
};

/**
 * Business
 */
const Business = {
  ...model('business'),
};

export default Business;

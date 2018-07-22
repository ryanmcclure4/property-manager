// @flow

import db from '../db';
import model from '../model';

export type $Contact = {
  _id: string,
  firstName: string,
  lastName: string,
  emailAddress: string,
};

/**
 * Contact
 */
const Contact = {
  ...model('contact'),
};

export default Contact;

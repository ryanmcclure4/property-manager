// @flow

import db from '../db';
import model from '../model';

export type $Payment = {
  _id: string,
  type: 'rent' | 'deposit' | 'other',
  amount: number,
  dueDate: number,
  recurring: boolean,
  businessId: string,
  propertyId: string,
  tenantId: string,
  status: 'paid' | 'late' | 'cancelled',
  note: string,
  receipt: {
    sent: boolean,
    sentAt: number,
  },
};

/**
 * Payment
 */
const Payment = {
  ...model('payment'),
};

export default Payment;

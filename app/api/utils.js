// @flow
import uuid from 'uuid';

const idField = (name: string): string => `${name}:${uuid()}`;

export {
  idField,
};

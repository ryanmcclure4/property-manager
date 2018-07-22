// @flow

import db from './db';
import { idField } from './utils';

export type $Model = {
  create: Function,
  update: Function,
  delete: Function,
  fetch: Function,
};

/**
 * Builds a base model object
 */
const model = (name: string): $Model => ({

  /**
   * Create
   */
  async create(data: Object): Promise<void> {
    return db.put({
      _id: idField(name),
      ...data,
    });
  },

  /**
   * Update
   */
  async update(id: string, data: Object): Promise<void> {
    return db.put({
      _id: id,
      ...data,
    });
  },

  /**
   * Delete
   */
  async delete(id: string): Promise<void> {
    return db.remove(id);
  },

  /**
   * Fetch
   */
  async fetch(id: string): Promise<void> {
    return db.get(id);
  },

});

export default model;

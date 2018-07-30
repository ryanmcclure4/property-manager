// @flow
type actionType = {
  +type: string
};

export const SET_VIEW = 'SET_VIEW';

export function setView(view: string) {
  return {
    type: SET_VIEW,
    view,
  };
}

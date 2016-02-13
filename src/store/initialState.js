import * as types from '../constants/action-types';

const initialState = {
  visibilityFilter: types.SHOW_ALL,
  todos: [{
    text: 'First TODO Example',
    completed: false,
    id: 0
  }]
};
export default initialState;

import { SET_POSTS } from '../constants/actionTypes';

const INIT_STATE = {
  posts: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_POSTS: {
      return { ...state, posts: action.payload };
    }
    default:
      return state;
  }
};
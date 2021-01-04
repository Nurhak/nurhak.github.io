import { SET_POSTS } from '../constants/actionTypes';

export const setPosts = (posts) => {
  return {
    type: SET_POSTS,
    payload: posts
  }
};

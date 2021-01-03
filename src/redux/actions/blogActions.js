import { SET_POSTS } from '../constants/actionTypes';
import axios from 'axios';

export const fetchPosts = () => {
  return dispatch => {
    axios.get('http://localhost:3004/api/posts').then(({ data }) => {
      dispatch({
        type: SET_POSTS,
        payload: data,
      });
    });
  };
};

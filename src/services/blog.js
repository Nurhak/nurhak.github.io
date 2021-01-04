import { fetchStart, fetchSuccess } from '../redux/actions/common';
import { setPosts } from '../redux/actions/blogActions';
import axios from './config';

const blogServices = {
  fetchPosts: () => {
    return dispatch => {
      dispatch(fetchStart());
      axios.get('/posts').then(({ data }) => {
      dispatch(setPosts(data));
    });
    dispatch(fetchSuccess());
    };
  },
};

export default blogServices;

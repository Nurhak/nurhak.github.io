import { fetchError, fetchStart, fetchSuccess } from '../redux/actions/common';
import {updateLoadUser, setAuthUser } from '../redux/actions/auth';
import axios from './config';

const JWTAuth = {
  onLogin: ({ email, password }) => {
    return dispatch => {
      try {
        dispatch(fetchStart());
        axios
          .post('user/login/', {
            email: email,
            password: password,
          })
          .then(({ data }) => {
            if (data.auth_token) {
              localStorage.setItem('auth_token', data.auth_token);
              axios.defaults.headers.common['auth_token'] = data.auth_token;
              dispatch(fetchSuccess());
              dispatch(JWTAuth.getAuthUser(true));

            } else {
              dispatch(fetchError(data.error));
            }
          })
          .catch(function(error) {
            dispatch(fetchError(error.message));
          });
      } catch (error) {
        dispatch(fetchError(error.message));
      }
    };
  },
  onLogout: () => {
    return dispatch => {
      dispatch(fetchStart());
      localStorage.removeItem('auth_token');   
      dispatch(fetchSuccess());
      window.location.reload();
    };
  },

  getAuthUser: (loaded = false, token) => {
    return dispatch => {
      dispatch(fetchStart());
      dispatch(updateLoadUser(loaded));
      let access;
      if (token) {
        access = token;
      } else {
        access = localStorage.getItem('auth_token');
      }
      axios.defaults.headers.common['auth_token'] = access;
      axios
        .get('user/me/')
        .then(({ data }) => {
          if (data) {
            dispatch(fetchSuccess());
            dispatch(setAuthUser(data));
          } else {
            dispatch(updateLoadUser(true));
          }
        })
        .catch(function(error) {
          dispatch(updateLoadUser(true));
        });
    };
  },
};

export default JWTAuth;

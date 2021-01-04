/* eslint-disable import/no-anonymous-default-export */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import Blog from './blog';
import Common from './common';
import Auth from './auth';


export default history =>
  combineReducers({
    router: connectRouter(history),
    blog: Blog,
    common: Common,
    auth: Auth
  });

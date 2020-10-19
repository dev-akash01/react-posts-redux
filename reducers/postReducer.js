/*
@ This Reeducer has all the Actions registered related to Posts
@ The createReducer is a replacement of Switch via closures.
*/

import { FETCH_POSTS, NEW_POST } from '../actions/actiontypes';
import createReducer from '../utils/createReducer';

// initialise the state
const initialState = {
    items: [],
    item: {}
}

// Action to fetch posts from backend
const fetchPosts = (state,  {payload} ) => ({
    ...state,
    items: payload
  });

// Action to create/add new posts
  const createPosts = (state,  {payload} ) => (
    {
    ...state,
    item: payload
  });


  export default createReducer(initialState, {
      [FETCH_POSTS]: fetchPosts,
      [NEW_POST] : createPosts
  })
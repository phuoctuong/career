import { createAction } from 'redux-actions';

export const actionTypes = {
  GET_USERS_SUCCESS: 'GET_USERS_SUCCESS'
};

export const getUsersSuccess = createAction(actionTypes.GET_USERS_SUCCESS, result => ({
  user: result
}));

export default {
  getUsersSuccess
};

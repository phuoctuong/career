import { createAction } from 'redux-actions';
import updateUserApi from 'apis/updateUserApi';

export const actionTypes = {
  REQUEST_UPDATE: 'REQUEST_UPDATE',
  UPDATE_SUCCESS: 'UPDATE_SUCCESS',
  UPDATE_ERROR: 'UPDATE_ERROR'
};

export const requestUpdate = createAction(actionTypes.REQUEST_UPDATE);

export const updateSuccess = createAction(actionTypes.UPDATE_SUCCESS, data => ({
  payload: {
    ...data
  },
  error: false
}));

export const updateError = createAction(actionTypes.UPDATE_ERROR, error => ({
  payload: {
    messages: error.messages
  },
  error: true
}));

const updateUserAction = (type) => {
  return (dispatch) => {
    dispatch(requestUpdate());
    return updateUserApi(type)
      .then(result => dispatch(updateSuccess(result)))
      .catch(error => dispatch(updateError(error)));
  };
};

export default updateUserAction;

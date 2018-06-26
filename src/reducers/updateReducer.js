import { actionTypes } from 'actions/updateUserAction';

export const initialState = {
  payload: {},
  error: null
};

const updateReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_UPDATE:
      return {
        ...state
      };
    case actionTypes.UPDATE_SUCCESS:
      return {
        ...state,
        payload: action.payload
      };
    case actionTypes.UPDATE_ERROR:
      return {
        ...state,
        error: true,
        payload: action.payload
      };
    default:
      return state;
  }
};

export default updateReducer;

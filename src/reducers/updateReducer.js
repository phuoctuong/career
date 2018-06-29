import { actionTypes } from 'actions/updateUserAction';

export const initialState = {
  user: {}
};

const updateReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS_SUCCESS:
      return {
        ...action.payload
      };
    default:
      return state;
  }
};

export default updateReducer;

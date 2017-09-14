import types from "../constants"

export const initialState = {
  payload: {},
  error: null
}

const updateReducer = (state=initialState, action) => {
  switch(action.type) {
    case types.REQUEST_UPDATE:
      return {
        ...state
      }
    case types.UPDATE_SUCCESS:
      return {
        ...state,
        payload: action.payload
      }
    case types.UPDATE_ERROR:
      return {
        ...state,
        error :true,
        payload: action.payload
      }
    default:
      return state
  }
}

export default updateReducer

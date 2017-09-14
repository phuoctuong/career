import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import updateUserAction from "../../src/actions/updateUserAction.js"
import types from "../../src/constants"

jest.mock("../../src/api/updateUserApi.js")

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Update User Action', () => {
  it('should Update User Success when user with id existed', () => {
    const initialState = {}
    const store = mockStore(initialState)

    const expectedActions = [
      {
        type: types.REQUEST_UPDATE
      },
      {
        type: types.UPDATE_SUCCESS,
        payload: {
          name: "Mock A",
          age: 10
        }
      }
    ]

    return store.dispatch(updateUserAction(0))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  });

  it('should Update User Failure when update user with id not found', () => {
      const initialState = {}
      const store = mockStore(initialState)
      const expectedActions = [
        {
          type: types.REQUEST_UPDATE
        },
        {
          type: types.UPDATE_ERROR,
          payload: 'Users can not found'
        }
      ]

      return store.dispatch(updateUserAction(3))
      .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
      })
  });

})

import types from '../../src/constants';
import updateReducer from '../../src/reducers/updateReducer.js';

describe('Update User Reducer', () => {
  let state;
  beforeEach(() => {
    state = updateReducer(undefined, {});
  });

  it('should be initialState', () => {
    expect(updateReducer(state, {})).toEqual(state);
  });

  it('should handle Request Update type', () => {
    expect(
      updateReducer(state, {
        type: types.REQUEST_UPDATE
      })
    ).toEqual(state);
  });

  it('should handle Update Success type', () => {
    expect(
      updateReducer(state, {
        type: types.UPDATE_SUCCESS,
        payload: {
          1: {
            name: 'A',
            age: 10
          }
        }
      })
    ).toEqual({
      ...state,
      payload: {
        1: {
          name: 'A',
          age: 10
        }
      }
    });
  });

  it('should handle Update Error type', () => {
    expect(
      updateReducer(state, {
        type: types.UPDATE_ERROR,
        payload: 'User id not found'
      })
    ).toEqual({
      ...state,
      error: true,
      payload: 'User id not found'
    });
  });
});

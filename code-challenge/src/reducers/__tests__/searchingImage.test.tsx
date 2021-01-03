// Actions
import * as Actions from 'actions/searching';
import reducer, { initialState } from 'reducers/searchingImage';

describe('Authentication reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should be call action.GET_IMAGE_SEARCHING_REQUEST', () => {
    const startAction = {
      type: Actions.GET_IMAGE_SEARCHING_REQUEST,
    };

    expect(reducer(initialState, startAction).type).toEqual(
      Actions.GET_IMAGE_SEARCHING_REQUEST,
    );
  });

  it('should be call action GET_IMAGE_SEARCHING_SUCCESS', () => {
    const startAction = {
      type: Actions.GET_IMAGE_SEARCHING_SUCCESS,
      imageData: [],
    };

    expect(reducer(initialState, startAction).type).toEqual(
      Actions.GET_IMAGE_SEARCHING_SUCCESS,
    );
  });

  it('should be call action GET_IMAGE_SEARCHING_FAILED', () => {
    const startAction = {
      type: Actions.GET_IMAGE_SEARCHING_FAILED,
      errors: {
        message: 'Error',
      },
    };
    expect(reducer(initialState, startAction).searchingImgError.message).toEqual(
      startAction.errors.message,
    );
  });
});

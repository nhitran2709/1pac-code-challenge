// Libs
import { put, call, takeLatest } from 'redux-saga/effects';

// API
import API from 'apis';

// Constants
import ENDPOINTS from 'constants/endpoints';

// Actions
import * as Actions from 'actions/searching';

/**
 * getImageSearchingRequest: saga help get image searching
 */
function* getImageSearchingRequest(actions: any) {
  const { payload } = actions;

  try {
    const response = yield call(() => API.get(`${ENDPOINTS.SEARCHING}?q=${payload}`));

    if (response.ok) {
      yield put({
        type: Actions.GET_IMAGE_SEARCHING_SUCCESS,
        data: response.data,
      });
    } else {
      yield put({
        type: Actions.GET_IMAGE_SEARCHING_FAILED,
        errors: response.data,
      });
    }
  } catch (errors) {
    yield put({
      type: Actions.GET_IMAGE_SEARCHING_FAILED,
      errors,
    });
  }
}

function* imageSearching() {
  return [
    yield takeLatest(Actions.GET_IMAGE_SEARCHING_REQUEST, getImageSearchingRequest),
  ];
}

export default imageSearching;

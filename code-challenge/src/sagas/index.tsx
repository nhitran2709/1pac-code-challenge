// Libs
import { all } from 'redux-saga/effects';

// Sagas
import imageSearching from 'sagas/getImageSearching';

export default function* rootSaga() {
  yield all([
    imageSearching(),
    // All sagas in here
  ]);
}

import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootSaga from 'sagas';
import rootReducer from 'reducers';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(
  rootReducer,
  process.env.NODE_ENV !== 'development'
    ? applyMiddleware(logger, ...middleware)
    : applyMiddleware(...middleware),
);

sagaMiddleware.run(rootSaga);

export default store;

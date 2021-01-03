// Libs
import { combineReducers } from 'redux';

// Reducers

const appReducers = combineReducers({
  // All reducers in here
});

const rootReducers = (state: any, action: any) => appReducers(state, action);

export default rootReducers;

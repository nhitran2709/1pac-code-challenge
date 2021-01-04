// Libs
import { combineReducers } from 'redux';

// Reducers
import searchingImage from 'reducers/searchingImage';

const appReducers = combineReducers({
  searchingImage,
});

const rootReducers = (state: any, action: any) => appReducers(state, action);

export default rootReducers;

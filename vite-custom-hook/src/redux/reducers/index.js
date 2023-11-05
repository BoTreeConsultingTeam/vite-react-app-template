import { combineReducers } from 'redux';

const initialState = {};

const appReducer = combineReducers({});

const rootReducer = (state = initialState, action) => {
  return appReducer(state, action);
};

export default rootReducer;

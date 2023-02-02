import toggleReducer from './isToggle';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    isToggle: toggleReducer,
});

export default allReducers;

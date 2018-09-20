import { combineReducers } from 'redux';
import countries from './countries';
import continents from './continents';
import cities from './cities';

export default combineReducers({
    countries, continents, cities
});

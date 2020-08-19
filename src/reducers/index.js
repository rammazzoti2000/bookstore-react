import { combineReducers } from 'redux';
import bookStore from './books';
import filterReducer from './filter';

export default combineReducers({
  books: bookStore,
  filter: filterReducer,
});

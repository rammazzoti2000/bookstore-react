import { combineReducers } from 'redux';
import bookStore from './books';

export default combineReducers({ books: bookStore });

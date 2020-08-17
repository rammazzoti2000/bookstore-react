import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import App from './components/App';
import sampleBookObj from './sampleBookObject';
import books from './reducers/index';
import './index.css';

const store = createStore(books, sampleBookObj);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

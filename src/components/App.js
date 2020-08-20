import React from 'react';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

const App = () => (
  <div className="App">
    <div className="container">
      <BooksList />
      <BooksForm />
    </div>
  </div>
);

export default App;

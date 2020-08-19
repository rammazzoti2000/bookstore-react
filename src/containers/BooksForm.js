import React from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const dropdownMenu = categories.map(category => (
  <option key={category} value={category}>
    {category}
  </option>
));

const BooksForm = () => (
  <div>
    <form className="main-form">
      <label htmlFor="book-title">
        Book Title:
        <input
          type="text"
          id="book-title"
          placeholder="Enter Book Title"
          required
        />
      </label>
      <label htmlFor="book-category">
        Book Category:
        <select id="book-category">
          { dropdownMenu }
        </select>
      </label>
      <button type="submit" className="submit">Add New Book</button>
    </form>
  </div>
);

export default BooksForm;

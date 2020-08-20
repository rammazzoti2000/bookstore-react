import React from 'react';
import PropTypes from 'prop-types';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const dropdownMenu = categories.map(category => (
  <option key={category} value={category}>
    {category}
  </option>
));

const CategoryFilter = ({ handleChange }) => (
  <div>
    <select name="category" onChange={event => handleChange(event)}>
      <option value="All">Categories</option>
      { dropdownMenu }
    </select>
  </div>
);

CategoryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default CategoryFilter;

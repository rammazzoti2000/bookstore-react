import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';
import { generateID } from '../sampleBookObject';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const dropdownMenu = categories.map(category => (
  <option key={category} value={category}>
    {category}
  </option>
));

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: generateID(),
      title: '',
      category: categories[0],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    if (e.target.name === 'title') {
      this.setState({ title: e.target.value });
    } else if (e.target.name === 'category') {
      this.setState({ category: e.target.value });
    }
  }

  handleSubmit(e) {
    const { title } = this.state;
    const { createBook } = this.props;
    e.preventDefault();
    if (title) {
      createBook(this.state);
      this.reset();
    }
  }

  reset() {
    this.setState({
      id: generateID(),
      title: '',
      category: categories[0],
    });
  }

  render() {
    const { title, category } = this.state;
    return (
      <div className="form-container">
        <h2 className="form-title">Add New Book</h2>
        <form className="main-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Book title"
            value={title}
            onChange={this.handleChange}
            required
          />
          <select
            id="category"
            name="category"
            onChange={this.handleChange}
            value={category}
          >
            { dropdownMenu }
          </select>
          <button
            type="submit"
            className="submit"
          >
            Add New Book
          </button>
        </form>
      </div>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: book => {
    dispatch(createBook(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);

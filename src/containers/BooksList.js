import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';
import logo from '../assets/logo.svg';

class BooksList extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemoveBook = this.handleRemoveBook.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleRemoveBook(book) {
    const { removeBook } = this.props;
    const s = this.props;
    const bookIndex = (s.books).findIndex(x => x === book);
    removeBook(bookIndex);
  }

  handleFilterChange(event) {
    const filter = event.target.value;
    const { changeFilter } = this.props;
    changeFilter(filter);
  }

  render() {
    const { books, filter } = this.props;
    const filteredBooks = (filter !== 'All') ? books.filter(book => book.category === filter) : books;
    return (
      <div className="book-container">
        <header>
          <div className="title">
            <h1>
              Bookstore CMS
              <span className="books">Books</span>
            </h1>
            <div className="categories">
              <CategoryFilter handleChange={this.handleFilterChange} />
            </div>
          </div>
          <div className="imgHeader">
            <img className="logo" src={logo} alt="logo" />
          </div>
        </header>
        <main className="main">
          <div className="book-section">
            {filteredBooks.map(book => (
              <Book
                key={book.id}
                book={book}
                handleRemoveBook={() => this.handleRemoveBook(book)}
              />
            ))}
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  changeFilter: book => dispatch(changeFilter(book)),
});

BooksList.defaultProps = {
  filter: 'All',
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Object).isRequired,
  filter: PropTypes.string,
  removeBook: PropTypes.instanceOf(Function).isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

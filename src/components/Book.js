import React from 'react';
import PropTypes from 'prop-types';
import BookDropDown from './BookDropDown';
import noImage from '../assets/images/no-cover-image.png';

const Book = props => {
  const { book, books, changeShelf } = props;

  // add fallbacks for missing cover images and title
  const coverImg =
    book.imageLinks && book.imageLinks.thumbnail
      ? book.imageLinks.thumbnail
      : noImage;
  const title = book.title ? book.title : 'No title available';

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ backgroundImage: `url(${coverImg})` }}
          />
          <BookDropDown book={book} books={books} changeShelf={changeShelf} />
        </div>
        <div className="book-title">{title}</div>
        {/* Check for authors and render each on separate line if exist*/
        book.authors &&
          book.authors.map((author, index) => (
            <div className="book-authors" key={index}>
              {author}
            </div>
          ))}
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
};

export default Book;
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookList from '../container/BookList';
import { Link } from 'react-router-dom';
import Search from '../container/Search';
import NotFound from '../components/NotFound';
import '../css/style.css';

class AppRouter extends React.Component {
  state = { books: [] };

  componentDidMount() {
    // get books on load
    BooksAPI.getAll().then(books => this.setState({ books }));
  }

  changeShelf = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf).then(response => {
      // set shelf for new or updated book
      changedBook.shelf = shelf;
      // update state with changed book
      this.setState(prevState => ({
        books: prevState.books
          // remove updated book from array
          .filter(book => book.id !== changedBook.id)
          // add updated book to array
          .concat(changedBook)
      }));
    });
  };

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Switch>
          <Route
            path="/search"
            render={() => (
              <Search books={books} changeShelf={this.changeShelf} />
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <BookList books={books} changeShelf={this.changeShelf} />
                <div className="open-search">
                  <Link to="/search">Search</Link>
                </div>
              </div>
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default AppRouter;